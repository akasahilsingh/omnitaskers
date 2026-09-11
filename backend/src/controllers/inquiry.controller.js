// src/controllers/inquiry.controller.js — Inquiry management
import { z } from 'zod'
import { prisma } from '../utils/prisma.js'
import { sendSuccess, sendError, sendPaginated } from '../utils/response.js'
import { sendNewInquiryAlert, sendInquiryConfirmation } from '../services/email.service.js'

// ── Validation Schemas ─────────────────────────────────────────────────────────

const createInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.').max(100),
  companyName: z.string().max(200).optional().or(z.literal('')),
  email: z.string().email('Please provide a valid email address.'),
  phone: z.string().min(10, 'Please provide a valid phone number.').max(20),
  serviceCategory: z.enum(
    ['WAREHOUSE_OPERATIONS', 'LOGISTICS_SUPPLY_CHAIN', 'FACILITY_MANAGEMENT', 'MANPOWER_SOLUTIONS'],
    { errorMap: () => ({ message: 'Please select a valid service category.' }) }
  ),
  message: z.string().min(10, 'Message must be at least 10 characters.').max(2000),
})

const updateInquirySchema = z.object({
  status: z.enum(['NEW', 'CONTACTED', 'QUOTED', 'CONVERTED', 'LOST']).optional(),
  followUpAt: z.string().datetime().optional().nullable(),
  assignedToId: z.string().optional().nullable(),
})

const addNoteSchema = z.object({
  content: z.string().min(1, 'Note content cannot be empty.').max(2000),
})

// ── Public Controller ──────────────────────────────────────────────────────────

/**
 * POST /api/v1/inquiries
 * Submit a new inquiry from the website contact form
 */
export const createInquiry = async (req, res, next) => {
  try {
    const data = createInquirySchema.parse(req.body)

    const inquiry = await prisma.inquiry.create({
      data: {
        name: data.name,
        companyName: data.companyName || null,
        email: data.email,
        phone: data.phone,
        serviceCategory: data.serviceCategory,
        message: data.message,
        source: 'WEBSITE_FORM',
        status: 'NEW',
      },
    })

    // Send emails (non-blocking — don't fail the request if email fails)
    Promise.all([
      sendNewInquiryAlert(inquiry).catch((err) =>
        console.error('⚠️  Admin alert email failed:', err.message)
      ),
      sendInquiryConfirmation(inquiry).catch((err) =>
        console.error('⚠️  Confirmation email failed:', err.message)
      ),
    ])

    return sendSuccess(
      res,
      { inquiryId: inquiry.id },
      "Thank you! We've received your inquiry and will get back to you within 24 hours.",
      201
    )
  } catch (error) {
    next(error)
  }
}

// ── Admin Controllers ──────────────────────────────────────────────────────────

/**
 * GET /api/v1/admin/inquiries
 * List all inquiries with filtering, search, and pagination
 */
export const getAllInquiries = async (req, res, next) => {
  try {
    const {
      page = '1',
      limit = '20',
      status,
      category,
      search,
      assignedTo,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = req.query

    const pageNum = Math.max(1, parseInt(page))
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)))
    const skip = (pageNum - 1) * limitNum

    // Build where clause
    const where = {}
    if (status) where.status = status
    if (category) where.serviceCategory = category
    if (assignedTo) where.assignedToId = assignedTo === 'unassigned' ? null : assignedTo
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { companyName: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
      ]
    }

    const validSortFields = ['createdAt', 'updatedAt', 'name', 'status']
    const orderBy = { [validSortFields.includes(sortBy) ? sortBy : 'createdAt']: sortOrder === 'asc' ? 'asc' : 'desc' }

    const [inquiries, total] = await Promise.all([
      prisma.inquiry.findMany({
        where,
        orderBy,
        skip,
        take: limitNum,
        include: {
          assignedTo: { select: { id: true, name: true, email: true } },
          _count: { select: { notes: true } },
        },
      }),
      prisma.inquiry.count({ where }),
    ])

    return sendPaginated(res, inquiries, {
      page: pageNum,
      limit: limitNum,
      total,
      totalPages: Math.ceil(total / limitNum),
      hasMore: pageNum * limitNum < total,
    })
  } catch (error) {
    next(error)
  }
}

/**
 * GET /api/v1/admin/inquiries/:id
 * Get single inquiry with all notes
 */
export const getInquiryById = async (req, res, next) => {
  try {
    const inquiry = await prisma.inquiry.findUnique({
      where: { id: req.params.id },
      include: {
        assignedTo: { select: { id: true, name: true, email: true } },
        notes: {
          include: { author: { select: { id: true, name: true } } },
          orderBy: { createdAt: 'desc' },
        },
      },
    })

    if (!inquiry) return sendError(res, 'Inquiry not found.', 404)
    return sendSuccess(res, inquiry)
  } catch (error) {
    next(error)
  }
}

/**
 * PUT /api/v1/admin/inquiries/:id
 * Update inquiry status, assignment, or follow-up date
 */
export const updateInquiry = async (req, res, next) => {
  try {
    const data = updateInquirySchema.parse(req.body)

    const update = {}
    if (data.status !== undefined) {
      update.status = data.status
      if (data.status === 'CONVERTED') update.convertedAt = new Date()
    }
    if (data.followUpAt !== undefined) update.followUpAt = data.followUpAt ? new Date(data.followUpAt) : null
    if (data.assignedToId !== undefined) update.assignedToId = data.assignedToId || null

    const inquiry = await prisma.inquiry.update({
      where: { id: req.params.id },
      data: update,
      include: { assignedTo: { select: { id: true, name: true } } },
    })

    return sendSuccess(res, inquiry, 'Inquiry updated successfully.')
  } catch (error) {
    next(error)
  }
}

/**
 * POST /api/v1/admin/inquiries/:id/notes
 * Add a note to an inquiry
 */
export const addNote = async (req, res, next) => {
  try {
    const { content } = addNoteSchema.parse(req.body)

    const note = await prisma.inquiryNote.create({
      data: {
        content,
        inquiryId: req.params.id,
        authorId: req.user.id,
      },
      include: { author: { select: { id: true, name: true } } },
    })

    return sendSuccess(res, note, 'Note added.', 201)
  } catch (error) {
    next(error)
  }
}

/**
 * DELETE /api/v1/admin/inquiries/:id
 * Soft delete (or hard delete) an inquiry
 */
export const deleteInquiry = async (req, res, next) => {
  try {
    await prisma.inquiry.delete({ where: { id: req.params.id } })
    return sendSuccess(res, null, 'Inquiry deleted.')
  } catch (error) {
    next(error)
  }
}
