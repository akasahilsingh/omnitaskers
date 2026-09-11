// src/routes/public.routes.js — Public read-only endpoints
import { Router } from 'express'
import {
  getServices, getServiceById,
  getTestimonials,
  getFaq,
  getSettings,
} from '../controllers/public.controller.js'

const router = Router()

router.get('/services', getServices)
router.get('/services/:id', getServiceById)
router.get('/testimonials', getTestimonials)
router.get('/faq', getFaq)
router.get('/settings', getSettings)

export default router
