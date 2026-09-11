// src/controllers/public.controller.js — Public read-only endpoints
import { prisma } from '../utils/prisma.js'
import { sendSuccess, sendError } from '../utils/response.js'

/**
 * GET /api/v1/services
 * Fetch all active services (replaces mockData.js)
 */
export const getServices = async (req, res, next) => {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    })
    return sendSuccess(res, services)
  } catch (error) {
    next(error)
  }
}

/**
 * GET /api/v1/services/:id
 */
export const getServiceById = async (req, res, next) => {
  try {
    const service = await prisma.service.findUnique({
      where: { id: req.params.id },
    })
    if (!service || !service.isActive) return sendError(res, 'Service not found.', 404)
    return sendSuccess(res, service)
  } catch (error) {
    next(error)
  }
}

/**
 * GET /api/v1/testimonials
 * Fetch published testimonials
 */
export const getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: 'asc' },
    })
    return sendSuccess(res, testimonials)
  } catch (error) {
    next(error)
  }
}

/**
 * GET /api/v1/faq
 * Fetch published FAQ items
 */
export const getFaq = async (req, res, next) => {
  try {
    const faq = await prisma.faq.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: 'asc' },
    })
    return sendSuccess(res, faq)
  } catch (error) {
    next(error)
  }
}

/**
 * GET /api/v1/settings
 * Fetch public company settings
 */
export const getSettings = async (req, res, next) => {
  try {
    const publicKeys = ['company_name', 'company_email', 'company_phone', 'company_whatsapp', 'company_address', 'company_tagline']
    const settings = await prisma.companySetting.findMany({
      where: { key: { in: publicKeys } },
    })
    const settingsMap = settings.reduce((acc, s) => ({ ...acc, [s.key]: s.value }), {})
    return sendSuccess(res, settingsMap)
  } catch (error) {
    next(error)
  }
}
