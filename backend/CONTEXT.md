# OmniTaskers Backend — Session Context

Last Updated: 2026-09-11 | Status: PHASE 1 COMPLETE (SMTP pending)

## Project Overview
OmniTaskers Solution Private Limited — B2B Integrated Workforce & Operations Company.
Backend: Node.js + Express v5 + PostgreSQL (Supabase) + Prisma v5 + Cloudinary v2 + Nodemailer v10.
Location: D:\Code\Web Developer\omni-taskers-backend
Frontend: D:\Code\Web Developer\omni-taskers-frontend-build (Vercel, omnitaskers.com)

## Phase 1 Status: COMPLETE ✅ (SMTP pending)

### What Is Live & Working
- Supabase PostgreSQL database — all 7 tables created and seeded
- All API endpoints tested and verified (public + auth + admin)
- JWT authentication working
- Cloudinary configured (dd0bxsqmo)
- Rate limiting, CORS, Helmet security all active
- Admin credentials seeded: admin@omnitaskers.in / Admin@Omni2024!

### What Is Pending
- SMTP email: info@omnitaskers.com (Hostinger) — password auth failing
  - User will fix via Hostinger hPanel -> Email Accounts -> info@omnitaskers.com -> Manage -> verify password
  - SMTP settings in .env: smtp.hostinger.com, port 587
  - Once fixed: update SMTP_PASS in .env and email alerts will work
- Render deployment: not yet pushed to GitHub / Render

## All API Endpoints (Tested ✅)
PUBLIC:
  GET  /health
  POST /api/v1/inquiries         (rate limited: 10/hr)
  GET  /api/v1/services
  GET  /api/v1/services/:id
  GET  /api/v1/testimonials
  GET  /api/v1/faq
  GET  /api/v1/settings

AUTH:
  POST /api/v1/auth/login
  GET  /api/v1/auth/me
  PUT  /api/v1/auth/change-password

ADMIN (JWT Bearer required):
  GET    /api/v1/admin/dashboard
  GET    /api/v1/admin/inquiries   (?page, ?limit, ?status, ?category, ?search)
  GET    /api/v1/admin/inquiries/:id
  PUT    /api/v1/admin/inquiries/:id
  POST   /api/v1/admin/inquiries/:id/notes
  DELETE /api/v1/admin/inquiries/:id  (SUPER_ADMIN only)
  CRUD   /api/v1/admin/services
  CRUD   /api/v1/admin/testimonials
  CRUD   /api/v1/admin/faq
  GET    /api/v1/admin/settings
  PUT    /api/v1/admin/settings/:key
  GET    /api/v1/admin/users       (SUPER_ADMIN only)

## Environment Variables (.env)
DATABASE_URL: Supabase transaction pooler port 6543, pgbouncer=true
DIRECT_URL: Supabase session port 5432 (for migrations)
PASSWORD NOTE: raw=*3hMWmX@%#nTB8DjZ@aT  encoded=*3hMWmX%40%25%23nTB8DjZ%40aT
JWT_SECRET: set
CLOUDINARY: CLOUD_NAME=dd0bxsqmo, API_KEY=set, API_SECRET=set
SMTP_HOST: smtp.hostinger.com, PORT: 587, USER: info@omnitaskers.com
SMTP_PASS: set (but auth failing — user to verify in Hostinger hPanel)
ADMIN_EMAIL: info@omnitaskers.com
FRONTEND_URL: https://omnitaskers.com

## Render Deployment (When Ready)
Build cmd: npm install && npx prisma generate && npx prisma migrate deploy
Start cmd: npm start
Health check: /health
All env vars documented in render.yaml

## Frontend Integration Needed
ContactForm.jsx  -> POST /api/v1/inquiries
Services page    -> GET  /api/v1/services
Testimonials     -> GET  /api/v1/testimonials
FAQ              -> GET  /api/v1/faq

## Phase 2 Plan (Not Started)
Tables: clients, workers, deployments, attendance, contracts
Key features: Client CRM, Worker registry, Deployment tracking, Attendance, Contract management

## Package Versions
express@5, nodemailer@10, multer@2, prisma@5.22, cloudinary@2.5, bcryptjs@2.4, jsonwebtoken@9, zod@3.23