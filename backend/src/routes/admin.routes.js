// src/routes/admin.routes.js — Protected admin endpoints
import { Router } from 'express'
import { isAdmin, isSuperAdmin } from '../middleware/auth.js'
import {
  getDashboard,
  adminGetServices, adminCreateService, adminUpdateService, adminDeleteService,
  adminGetTestimonials, adminCreateTestimonial, adminUpdateTestimonial, adminDeleteTestimonial,
  adminGetFaq, adminCreateFaq, adminUpdateFaq, adminDeleteFaq,
  adminGetSettings, adminUpdateSetting,
  adminGetUsers,
} from '../controllers/admin.controller.js'
import {
  getAllInquiries, getInquiryById, updateInquiry, addNote, deleteInquiry,
} from '../controllers/inquiry.controller.js'

const router = Router()

// All admin routes require auth + admin role
router.use(isAdmin)

// ── Dashboard ──────────────────────────────────────────────────────────────────
router.get('/dashboard', getDashboard)

// ── Inquiries ──────────────────────────────────────────────────────────────────
router.get('/inquiries', getAllInquiries)
router.get('/inquiries/:id', getInquiryById)
router.put('/inquiries/:id', updateInquiry)
router.post('/inquiries/:id/notes', addNote)
router.delete('/inquiries/:id', isSuperAdmin, deleteInquiry)

// ── Services CMS ───────────────────────────────────────────────────────────────
router.get('/services', adminGetServices)
router.post('/services', adminCreateService)
router.put('/services/:id', adminUpdateService)
router.delete('/services/:id', adminDeleteService)

// ── Testimonials CMS ───────────────────────────────────────────────────────────
router.get('/testimonials', adminGetTestimonials)
router.post('/testimonials', adminCreateTestimonial)
router.put('/testimonials/:id', adminUpdateTestimonial)
router.delete('/testimonials/:id', adminDeleteTestimonial)

// ── FAQ CMS ────────────────────────────────────────────────────────────────────
router.get('/faq', adminGetFaq)
router.post('/faq', adminCreateFaq)
router.put('/faq/:id', adminUpdateFaq)
router.delete('/faq/:id', adminDeleteFaq)

// ── Company Settings ───────────────────────────────────────────────────────────
router.get('/settings', adminGetSettings)
router.put('/settings/:key', adminUpdateSetting)

// ── User Management ────────────────────────────────────────────────────────────
router.get('/users', isSuperAdmin, adminGetUsers)

export default router
