// src/controllers/auth.controller.js — Authentication logic
import bcrypt from 'bcryptjs'
import { prisma } from '../utils/prisma.js'
import { generateToken } from '../utils/jwt.js'
import { sendSuccess, sendError } from '../utils/response.js'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Please provide a valid email address.'),
  password: z.string().min(1, 'Password is required.'),
})

/**
 * POST /api/v1/auth/login
 * Admin login — returns JWT token
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = loginSchema.parse(req.body)

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user || !user.isActive) {
      return sendError(res, 'Invalid email or password.', 401)
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash)
    if (!isPasswordValid) {
      return sendError(res, 'Invalid email or password.', 401)
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    })

    const token = generateToken({ userId: user.id, role: user.role })

    return sendSuccess(res, {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
      },
    }, 'Login successful.')
  } catch (error) {
    next(error)
  }
}

/**
 * GET /api/v1/auth/me
 * Get current authenticated user profile
 */
export const getMe = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        lastLoginAt: true,
        createdAt: true,
      },
    })

    if (!user) return sendError(res, 'User not found.', 404)
    return sendSuccess(res, user, 'User profile retrieved.')
  } catch (error) {
    next(error)
  }
}

/**
 * POST /api/v1/auth/change-password
 */
export const changePassword = async (req, res, next) => {
  try {
    const schema = z.object({
      currentPassword: z.string().min(1, 'Current password is required.'),
      newPassword: z.string().min(8, 'New password must be at least 8 characters.'),
    })

    const { currentPassword, newPassword } = schema.parse(req.body)

    const user = await prisma.user.findUnique({ where: { id: req.user.id } })
    const isValid = await bcrypt.compare(currentPassword, user.passwordHash)
    if (!isValid) return sendError(res, 'Current password is incorrect.', 400)

    const passwordHash = await bcrypt.hash(newPassword, 12)
    await prisma.user.update({ where: { id: req.user.id }, data: { passwordHash } })

    return sendSuccess(res, null, 'Password changed successfully.')
  } catch (error) {
    next(error)
  }
}
