# OmniTaskers Backend API — Phase 1

> **Node.js + Express + PostgreSQL + Prisma + Cloudinary + Nodemailer**  
> Deployed on Render · Phase 1 of 3

---

## Quick Start (Local Dev)

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment
```bash
cp .env.example .env
# Fill in your DATABASE_URL, JWT_SECRET, SMTP, Cloudinary credentials
```

### 3. Set up database
```bash
# Push schema to database
npm run db:push

# Generate Prisma client
npm run db:generate

# Seed initial data (admin user + services + testimonials + FAQ)
npm run db:seed
```

### 4. Start dev server
```bash
npm run dev
# Server runs at http://localhost:5000
# Health check: http://localhost:5000/health
```

---

## Default Admin Credentials (after seed)
```
Email:    admin@omnitaskers.in
Password: Admin@Omni2024!
```
⚠️ Change this password immediately after first login!

---

## API Reference

### Base URL
- Local: `http://localhost:5000`
- Production: `https://omnitaskers-api.onrender.com`

### Public Endpoints (No auth required)

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/health` | Server health check |
| `POST` | `/api/v1/inquiries` | Submit contact form inquiry |
| `GET` | `/api/v1/services` | Get all active services |
| `GET` | `/api/v1/services/:id` | Get service by ID |
| `GET` | `/api/v1/testimonials` | Get published testimonials |
| `GET` | `/api/v1/faq` | Get published FAQ items |
| `GET` | `/api/v1/settings` | Get public company settings |

### Auth Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/v1/auth/login` | Admin login → returns JWT token |
| `GET` | `/api/v1/auth/me` | Get current user profile |
| `PUT` | `/api/v1/auth/change-password` | Change password |

### Admin Endpoints (JWT required — Bearer token)

#### Inquiries
| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/api/v1/admin/inquiries` | List all inquiries (paginated, filterable) |
| `GET` | `/api/v1/admin/inquiries/:id` | Get inquiry with notes |
| `PUT` | `/api/v1/admin/inquiries/:id` | Update status/assignment |
| `POST` | `/api/v1/admin/inquiries/:id/notes` | Add internal note |
| `DELETE` | `/api/v1/admin/inquiries/:id` | Delete inquiry (Super Admin only) |

**Inquiry Query Params:**
- `?page=1&limit=20` — Pagination
- `?status=NEW` — Filter by status (NEW, CONTACTED, QUOTED, CONVERTED, LOST)
- `?category=WAREHOUSE_OPERATIONS` — Filter by service category
- `?search=company+name` — Search name/email/company/phone
- `?sortBy=createdAt&sortOrder=desc` — Sorting

#### CMS
| Method | Route | Description |
|--------|-------|-------------|
| `GET/POST` | `/api/v1/admin/services` | List / Create services |
| `PUT/DELETE` | `/api/v1/admin/services/:id` | Update / Delete service |
| `GET/POST` | `/api/v1/admin/testimonials` | List / Create testimonials |
| `PUT/DELETE` | `/api/v1/admin/testimonials/:id` | Update / Delete testimonial |
| `GET/POST` | `/api/v1/admin/faq` | List / Create FAQ |
| `PUT/DELETE` | `/api/v1/admin/faq/:id` | Update / Delete FAQ |
| `GET` | `/api/v1/admin/settings` | Get all settings |
| `PUT` | `/api/v1/admin/settings/:key` | Update a setting |
| `GET` | `/api/v1/admin/dashboard` | Summary stats + recent inquiries |
| `GET` | `/api/v1/admin/users` | List admin users (Super Admin only) |

---

## POST /api/v1/inquiries — Payload

```json
{
  "name": "Rajesh Gupta",
  "companyName": "ABC Logistics Pvt Ltd",
  "email": "rajesh@abclogistics.com",
  "phone": "+91-9876543210",
  "serviceCategory": "WAREHOUSE_OPERATIONS",
  "message": "We need 20 trained warehouse staff for our new fulfilment centre in Lucknow."
}
```

**serviceCategory** must be one of:
- `WAREHOUSE_OPERATIONS`
- `LOGISTICS_SUPPLY_CHAIN`
- `FACILITY_MANAGEMENT`
- `MANPOWER_SOLUTIONS`

---

## Deploying to Render

1. **Create a new Web Service** on [render.com](https://render.com)
2. Connect your GitHub repo
3. Set Build Command: `npm install && npx prisma generate && npx prisma migrate deploy`
4. Set Start Command: `npm start`
5. Add all environment variables from `.env.example` in the Render Dashboard
6. After first deploy, run the seed: SSH into Render shell → `npm run db:seed`

---

## Environment Variables Required

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string (NeonDB/Supabase) |
| `JWT_SECRET` | Random 32+ char string for JWT signing |
| `CLOUDINARY_CLOUD_NAME` | From Cloudinary dashboard |
| `CLOUDINARY_API_KEY` | From Cloudinary dashboard |
| `CLOUDINARY_API_SECRET` | From Cloudinary dashboard |
| `SMTP_HOST` | SMTP server (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | `587` for TLS |
| `SMTP_SECURE` | `false` for port 587, `true` for 465 |
| `SMTP_USER` | Your Gmail address |
| `SMTP_PASS` | Gmail App Password (not your Gmail password) |
| `ADMIN_EMAIL` | Email to receive new inquiry alerts |
| `COMPANY_EMAIL` | Company email shown in confirmation emails |
| `FRONTEND_URL` | Your Vercel frontend URL (for CORS) |

---

## Gmail App Password Setup

1. Google Account → Security → 2-Step Verification (enable it)
2. Google Account → Security → App passwords
3. Select "Mail" + your device → Generate
4. Use the 16-char code as `SMTP_PASS`

---

## Project Structure

```
omni-taskers-backend/
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── seed.js               # Initial data seeder
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── inquiry.controller.js
│   │   ├── public.controller.js
│   │   └── admin.controller.js
│   ├── middleware/
│   │   ├── auth.js           # JWT authentication
│   │   ├── validate.js       # Zod validation
│   │   └── errorHandler.js   # Global error handler
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── inquiry.routes.js
│   │   ├── public.routes.js
│   │   └── admin.routes.js
│   ├── services/
│   │   ├── email.service.js  # Nodemailer email templates
│   │   └── cloudinary.service.js
│   ├── utils/
│   │   ├── prisma.js         # Singleton Prisma client
│   │   ├── response.js       # Standard response helpers
│   │   └── jwt.js            # JWT sign/verify
│   ├── app.js                # Express app setup
│   └── server.js             # Entry point
├── .env.example
├── .gitignore
├── nodemon.json
├── package.json
└── render.yaml               # Render deployment config
```
