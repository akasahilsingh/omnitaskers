// src/controllers/admin.controller.js — Admin dashboard + CMS management
import { z } from 'zod'
import { prisma } from '../utils/prisma.js'
import { sendSuccess, sendError, sendPaginated } from '../utils/response.js'

// ── Dashboard ──────────────────────────────────────────────────────────────────

/**
 * GET /api/v1/admin/dashboard
 * Admin summary stats and recent inquiries
 */
export const getDashboard = async (req, res, next) => {
  try {
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const startOfWeek = new Date(now)
    startOfWeek.setDate(now.getDate() - now.getDay())
    startOfWeek.setHours(0, 0, 0, 0)

    const [
      totalInquiries,
      newInquiries,
      contactedInquiries,
      convertedInquiries,
      thisMonthInquiries,
      thisWeekInquiries,
      inquiriesByCategory,
      inquiriesByStatus,
      recentInquiries,
    ] = await Promise.all([
      prisma.inquiry.count(),
      prisma.inquiry.count({ where: { status: 'NEW' } }),
      prisma.inquiry.count({ where: { status: 'CONTACTED' } }),
      prisma.inquiry.count({ where: { status: 'CONVERTED' } }),
      prisma.inquiry.count({ where: { createdAt: { gte: startOfMonth } } }),
      prisma.inquiry.count({ where: { createdAt: { gte: startOfWeek } } }),
      prisma.inquiry.groupBy({
        by: ['serviceCategory'],
        _count: { serviceCategory: true },
        orderBy: { _count: { serviceCategory: 'desc' } },
      }),
      prisma.inquiry.groupBy({
        by: ['status'],
        _count: { status: true },
      }),
      prisma.inquiry.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          companyName: true,
          email: true,
          phone: true,
          serviceCategory: true,
          status: true,
          createdAt: true,
        },
      }),
    ])

    const conversionRate = totalInquiries > 0
      ? ((convertedInquiries / totalInquiries) * 100).toFixed(1)
      : '0.0'

    return sendSuccess(res, {
      overview: {
        totalInquiries,
        newInquiries,
        contactedInquiries,
        convertedInquiries,
        thisMonthInquiries,
        thisWeekInquiries,
        conversionRate: parseFloat(conversionRate),
      },
      byCategory: inquiriesByCategory.map((item) => ({
        category: item.serviceCategory,
        count: item._count.serviceCategory,
      })),
      byStatus: inquiriesByStatus.map((item) => ({
        status: item.status,
        count: item._count.status,
      })),
      recentInquiries,
    })
  } catch (error) {
    next(error)
  }
}

// ── Services CMS ───────────────────────────────────────────────────────────────

const serviceSchema = z.object({
  name: z.string().min(2).max(200),
  category: z.enum(['WAREHOUSE_OPERATIONS', 'LOGISTICS_SUPPLY_CHAIN', 'FACILITY_MANAGEMENT', 'MANPOWER_SOLUTIONS']),
  description: z.string().min(10).max(1000),
  tagline: z.string().max(300).optional(),
  icon: z.string().optional(),
  sortOrder: z.number().int().default(0),
  isActive: z.boolean().default(true),
  subServices: z.array(z.object({
    name: z.string(),
    description: z.string(),
  })).default([]),
})

export const adminGetServices = async (req, res, next) => {
  try {
    const services = await prisma.service.findMany({ orderBy: { sortOrder: 'asc' } })
    return sendSuccess(res, services)
  } catch (error) { next(error) }
}

export const adminCreateService = async (req, res, next) => {
  try {
    const data = serviceSchema.parse(req.body)
    const service = await prisma.service.create({ data })
    return sendSuccess(res, service, 'Service created.', 201)
  } catch (error) { next(error) }
}

export const adminUpdateService = async (req, res, next) => {
  try {
    const data = serviceSchema.partial().parse(req.body)
    const service = await prisma.service.update({ where: { id: req.params.id }, data })
    return sendSuccess(res, service, 'Service updated.')
  } catch (error) { next(error) }
}

export const adminDeleteService = async (req, res, next) => {
  try {
    await prisma.service.delete({ where: { id: req.params.id } })
    return sendSuccess(res, null, 'Service deleted.')
  } catch (error) { next(error) }
}

// ── Testimonials CMS ───────────────────────────────────────────────────────────

const testimonialSchema = z.object({
  clientName: z.string().min(2).max(100),
  company: z.string().min(2).max(200),
  designation: z.string().min(2).max(200),
  rating: z.number().int().min(1).max(5).default(5),
  quote: z.string().min(20).max(1000),
  initials: z.string().max(4),
  isPublished: z.boolean().default(true),
  sortOrder: z.number().int().default(0),
})

export const adminGetTestimonials = async (req, res, next) => {
  try {
    const testimonials = await prisma.testimonial.findMany({ orderBy: { sortOrder: 'asc' } })
    return sendSuccess(res, testimonials)
  } catch (error) { next(error) }
}

export const adminCreateTestimonial = async (req, res, next) => {
  try {
    const data = testimonialSchema.parse(req.body)
    const testimonial = await prisma.testimonial.create({ data })
    return sendSuccess(res, testimonial, 'Testimonial created.', 201)
  } catch (error) { next(error) }
}

export const adminUpdateTestimonial = async (req, res, next) => {
  try {
    const data = testimonialSchema.partial().parse(req.body)
    const testimonial = await prisma.testimonial.update({ where: { id: req.params.id }, data })
    return sendSuccess(res, testimonial, 'Testimonial updated.')
  } catch (error) { next(error) }
}

export const adminDeleteTestimonial = async (req, res, next) => {
  try {
    await prisma.testimonial.delete({ where: { id: req.params.id } })
    return sendSuccess(res, null, 'Testimonial deleted.')
  } catch (error) { next(error) }
}

// ── FAQ CMS ────────────────────────────────────────────────────────────────────

const faqSchema = z.object({
  question: z.string().min(5).max(500),
  answer: z.string().min(10).max(2000),
  sortOrder: z.number().int().default(0),
  isPublished: z.boolean().default(true),
})

export const adminGetFaq = async (req, res, next) => {
  try {
    const faq = await prisma.faq.findMany({ orderBy: { sortOrder: 'asc' } })
    return sendSuccess(res, faq)
  } catch (error) { next(error) }
}

export const adminCreateFaq = async (req, res, next) => {
  try {
    const data = faqSchema.parse(req.body)
    const faq = await prisma.faq.create({ data })
    return sendSuccess(res, faq, 'FAQ item created.', 201)
  } catch (error) { next(error) }
}

export const adminUpdateFaq = async (req, res, next) => {
  try {
    const data = faqSchema.partial().parse(req.body)
    const faq = await prisma.faq.update({ where: { id: req.params.id }, data })
    return sendSuccess(res, faq, 'FAQ item updated.')
  } catch (error) { next(error) }
}

export const adminDeleteFaq = async (req, res, next) => {
  try {
    await prisma.faq.delete({ where: { id: req.params.id } })
    return sendSuccess(res, null, 'FAQ item deleted.')
  } catch (error) { next(error) }
}

// ── Company Settings ───────────────────────────────────────────────────────────

export const adminGetSettings = async (req, res, next) => {
  try {
    const settings = await prisma.companySetting.findMany({ orderBy: { key: 'asc' } })
    return sendSuccess(res, settings)
  } catch (error) { next(error) }
}

export const adminUpdateSetting = async (req, res, next) => {
  try {
    const { value } = z.object({ value: z.string() }).parse(req.body)
    const setting = await prisma.companySetting.upsert({
      where: { key: req.params.key },
      update: { value },
      create: { key: req.params.key, value },
    })
    return sendSuccess(res, setting, 'Setting updated.')
  } catch (error) { next(error) }
}

// ── User Management ────────────────────────────────────────────────────────────

export const adminGetUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true, isActive: true, lastLoginAt: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    })
    return sendSuccess(res, users)
  } catch (error) { next(error) }
}
