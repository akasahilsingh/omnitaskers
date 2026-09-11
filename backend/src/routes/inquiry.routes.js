// src/routes/inquiry.routes.js — Public inquiry submission
import { Router } from 'express'
import { createInquiry } from '../controllers/inquiry.controller.js'

const router = Router()

// POST /api/v1/inquiries — Submit contact form
router.post('/', createInquiry)

export default router
