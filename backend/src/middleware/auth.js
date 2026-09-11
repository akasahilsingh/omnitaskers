// src/middleware/auth.js — JWT authentication middleware
import { verifyToken } from '../utils/jwt.js'
import { prisma } from '../utils/prisma.js'
import { sendError } from '../utils/response.js'

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return sendError(res, 'Authentication required. Please provide a valid token.', 401)
    }

    const token = authHeader.split(' ')[1]
    const decoded = verifyToken(token)

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, name: true, email: true, role: true, isActive: true },
    })

    if (!user) return sendError(res, 'User not found.', 401)
    if (!user.isActive) return sendError(res, 'Account is deactivated. Please contact support.', 401)

    req.user = user
    next()
  } catch (error) {
    next(error)
  }
}

export const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) return sendError(res, 'Authentication required.', 401)
    if (!roles.includes(req.user.role)) {
      return sendError(res, 'You do not have permission to perform this action.', 403)
    }
    next()
  }
}

export const isAdmin = [authenticate, requireRole('ADMIN', 'SUPER_ADMIN')]
export const isSuperAdmin = [authenticate, requireRole('SUPER_ADMIN')]
