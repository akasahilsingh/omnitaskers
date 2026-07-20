import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react'
import { CONTACT } from '../../lib/constants'

export function ContactCTA() {
  const handleWhatsApp = () => {
    const msg = "Hi Omnitaskers! I'd like to discuss workforce and operational solutions for my business."
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section style={{
      position: 'relative',
      padding: '6rem 0',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #071F38 0%, #0B3D6E 40%, #0F4F8C 70%, #0D9488 100%)',
    }}>
      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-10%', right: '5%',
          width: '450px', height: '450px',
          background: 'radial-gradient(circle, #14B8A6, transparent 70%)',
          filter: 'blur(70px)', borderRadius: '50%', pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.10, 0.20, 0.10] }}
        transition={{ duration: 12, repeat: Infinity, delay: 3, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '-15%', left: '0',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)',
          filter: 'blur(90px)', borderRadius: '50%', pointerEvents: 'none',
        }}
      />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div className="container-inner" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}
        >
          {/* Badge */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.20)',
            color: '#A7F3D0', padding: '6px 18px', borderRadius: '99px',
            fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            <Clock size={12} /> 24×7 Operational Support
          </span>

          <h2 style={{
            fontFamily: 'Outfit, sans-serif', fontWeight: 900,
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            color: 'white', lineHeight: 1.15, letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>
            Need Operational Support?
          </h2>
          <p style={{
            fontSize: '1.05rem', color: 'rgba(186, 230, 253, 0.80)',
            lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem',
          }}>
            Get in touch with our team for workforce solutions, logistics support, or facility management services.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleWhatsApp}
              style={{
                background: '#25D366',
                color: 'white',
                padding: '0.85rem 2rem',
                borderRadius: '14px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700, fontSize: '0.95rem',
                display: 'flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 8px 28px rgba(37,211,102,0.35)',
                cursor: 'pointer',
              }}
            >
              <MessageCircle size={19} />
              WhatsApp Us
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${CONTACT.phone}`}
              style={{
                background: 'rgba(255,255,255,0.95)',
                color: '#0B3D6E',
                padding: '0.85rem 2rem',
                borderRadius: '14px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700, fontSize: '0.95rem',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 8px 28px rgba(0,0,0,0.20)',
                cursor: 'pointer', textDecoration: 'none',
              }}
            >
              <Phone size={19} style={{ color: '#0D9488' }} />
              Call Now
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1.5px solid rgba(255,255,255,0.30)',
                color: 'white',
                padding: '0.83rem 2rem',
                borderRadius: '14px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700, fontSize: '0.95rem',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                cursor: 'pointer', textDecoration: 'none',
                transition: 'background 0.25s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.10)'}
            >
              <Mail size={19} />
              Submit Your Requirement
            </motion.a>
          </div>

          {/* Info row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '18px',
            overflow: 'hidden',
          }}>
            {[
              { label: 'Direct Hotline', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
              { label: 'Email Inquiry', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { label: 'Support Hours', value: '9 AM – 9 PM Daily', href: null },
            ].map((info) => (
              <div key={info.label} style={{
                background: 'rgba(255,255,255,0.06)',
                padding: '1.25rem 1.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
              }}>
                <p style={{
                  fontSize: '0.65rem', color: 'rgba(148,208,210,0.7)',
                  fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', marginBottom: '6px',
                }}>
                  {info.label}
                </p>
                {info.href ? (
                  <a href={info.href} style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                    fontSize: '0.9rem', color: 'white',
                    textDecoration: 'none', transition: 'color 0.2s',
                    wordBreak: 'break-all',
                  }}
                    onMouseEnter={e => e.target.style.color = '#5EEAD4'}
                    onMouseLeave={e => e.target.style.color = 'white'}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                    fontSize: '0.9rem', color: '#5EEAD4',
                  }}>
                    {info.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
