// src/services/email.service.js — Nodemailer email service
import nodemailer from 'nodemailer'

// Create transporter (lazy — only created when first needed)
let transporter = null

const getTransporter = () => {
  if (transporter) return transporter

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Needed for some hosting providers
    },
  })

  return transporter
}

// ── Email Templates ────────────────────────────────────────────────────────────

const baseTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OmniTaskers</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; color: #1e293b; }
    .wrapper { max-width: 600px; margin: 32px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #071F38 0%, #0B3D6E 50%, #0D9488 100%); padding: 32px 40px; text-align: center; }
    .header h1 { color: white; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { color: rgba(186,230,253,0.8); font-size: 14px; margin-top: 6px; }
    .body { padding: 40px; }
    .badge { display: inline-block; background: rgba(13,148,136,0.1); color: #0D9488; padding: 4px 14px; border-radius: 99px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 20px; }
    .card { background: #f8fafc; border-radius: 12px; padding: 24px; margin: 20px 0; border: 1px solid #e2e8f0; }
    .field { margin-bottom: 16px; }
    .field:last-child { margin-bottom: 0; }
    .label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0f172a; font-weight: 500; }
    .message-box { background: white; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin-top: 8px; font-size: 14px; line-height: 1.7; color: #475569; }
    .btn { display: inline-block; background: linear-gradient(135deg, #0D9488, #14B8A6); color: white !important; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 14px; margin-top: 24px; }
    .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px 40px; text-align: center; font-size: 12px; color: #64748b; }
    .status { display: inline-block; padding: 4px 12px; border-radius: 99px; font-size: 12px; font-weight: 700; }
    .status-new { background: rgba(59,130,246,0.1); color: #2563eb; }
    .divider { height: 1px; background: #e2e8f0; margin: 24px 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>🏭 OmniTaskers</h1>
      <p>Integrated Workforce & Operations Solutions</p>
    </div>
    ${content}
    <div class="footer">
      <p>© 2026 Omnitaskers Solution Private Limited · Lucknow, UP, India</p>
      <p style="margin-top:6px"><a href="mailto:hello@omnitaskers.in" style="color:#0D9488;text-decoration:none;">hello@omnitaskers.in</a></p>
    </div>
  </div>
</body>
</html>
`

const categoryLabels = {
  WAREHOUSE_OPERATIONS: 'Warehouse Operations',
  LOGISTICS_SUPPLY_CHAIN: 'Logistics & Supply Chain',
  FACILITY_MANAGEMENT: 'Facility Management',
  MANPOWER_SOLUTIONS: 'Manpower Solutions',
}

// ── Email Functions ────────────────────────────────────────────────────────────

/**
 * Send notification to admin when a new inquiry is submitted
 */
export const sendNewInquiryAlert = async (inquiry) => {
  const html = baseTemplate(`
    <div class="body">
      <div class="badge">🔔 New Inquiry Alert</div>
      <h2 style="font-size:22px;font-weight:800;color:#0B3D6E;margin-bottom:8px;">New Client Inquiry Received</h2>
      <p style="color:#64748b;font-size:14px;line-height:1.6;">A new inquiry has been submitted through the website. Please follow up promptly.</p>

      <div class="card">
        <div class="field">
          <div class="label">Contact Name</div>
          <div class="value">${inquiry.name}</div>
        </div>
        ${inquiry.companyName ? `
        <div class="field">
          <div class="label">Company</div>
          <div class="value">${inquiry.companyName}</div>
        </div>` : ''}
        <div class="field">
          <div class="label">Email</div>
          <div class="value"><a href="mailto:${inquiry.email}" style="color:#0D9488;text-decoration:none;">${inquiry.email}</a></div>
        </div>
        <div class="field">
          <div class="label">Phone</div>
          <div class="value"><a href="tel:${inquiry.phone}" style="color:#0D9488;text-decoration:none;">${inquiry.phone}</a></div>
        </div>
        <div class="field">
          <div class="label">Service Interest</div>
          <div class="value">${categoryLabels[inquiry.serviceCategory] || inquiry.serviceCategory}</div>
        </div>
        <div class="divider"></div>
        <div class="field">
          <div class="label">Message</div>
          <div class="message-box">${inquiry.message}</div>
        </div>
      </div>

      <div style="margin-top:8px;font-size:13px;color:#64748b;">
        📅 Submitted: ${new Date(inquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST<br>
        🆔 Inquiry ID: <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:12px;">${inquiry.id}</code>
      </div>
    </div>
  `)

  await getTransporter().sendMail({
    from: `"OmniTaskers System" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `🔔 New Inquiry: ${inquiry.name}${inquiry.companyName ? ` (${inquiry.companyName})` : ''} — ${categoryLabels[inquiry.serviceCategory]}`,
    html,
  })
}

/**
 * Send confirmation email to the person who submitted the inquiry
 */
export const sendInquiryConfirmation = async (inquiry) => {
  const html = baseTemplate(`
    <div class="body">
      <div class="badge">✅ Inquiry Received</div>
      <h2 style="font-size:22px;font-weight:800;color:#0B3D6E;margin-bottom:8px;">Thank You, ${inquiry.name.split(' ')[0]}!</h2>
      <p style="color:#475569;font-size:15px;line-height:1.7;margin-bottom:20px;">
        We've received your inquiry about <strong>${categoryLabels[inquiry.serviceCategory] || 'our services'}</strong>.
        Our team will review your requirements and get back to you within <strong>24 hours</strong>.
      </p>

      <div class="card">
        <div style="font-size:13px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:16px;">Your Inquiry Summary</div>
        <div class="field">
          <div class="label">Service Category</div>
          <div class="value">${categoryLabels[inquiry.serviceCategory] || inquiry.serviceCategory}</div>
        </div>
        ${inquiry.companyName ? `
        <div class="field">
          <div class="label">Company</div>
          <div class="value">${inquiry.companyName}</div>
        </div>` : ''}
        <div class="field">
          <div class="label">Reference ID</div>
          <div class="value"><code style="background:#f1f5f9;padding:4px 10px;border-radius:6px;font-size:13px;">${inquiry.id}</code></div>
        </div>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.7;margin-top:20px;">
        In the meantime, feel free to reach out to us directly:
      </p>
      <p style="font-size:14px;color:#475569;margin-top:8px;">
        📞 <strong>${process.env.COMPANY_PHONE || '+91-9876543210'}</strong><br>
        📧 <a href="mailto:hello@omnitaskers.in" style="color:#0D9488;">hello@omnitaskers.in</a><br>
        💬 <a href="https://wa.me/${process.env.COMPANY_WHATSAPP || '919876543210'}" style="color:#0D9488;">WhatsApp us directly</a>
      </p>

      <p style="font-size:14px;color:#475569;margin-top:24px;padding-top:20px;border-top:1px solid #e2e8f0;">
        We look forward to becoming your trusted operations partner.
      </p>
      <p style="font-size:15px;font-weight:700;color:#0B3D6E;margin-top:8px;">— The OmniTaskers Team</p>
    </div>
  `)

  await getTransporter().sendMail({
    from: `"OmniTaskers" <${process.env.SMTP_USER}>`,
    to: inquiry.email,
    subject: `✅ We received your inquiry — OmniTaskers will be in touch soon!`,
    html,
  })
}

/**
 * Verify SMTP connection (useful for health checks)
 */
export const verifyEmailConnection = async () => {
  await getTransporter().verify()
  return true
}
