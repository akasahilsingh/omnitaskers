// src/middleware/validate.js — Zod validation middleware
import { ZodError } from 'zod'
import { sendError } from '../utils/response.js'

export const validate = (schema, source = 'body') => {
  return (req, res, next) => {
    try {
      const data = schema.parse(req[source])
      req[source] = data
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        return sendError(
          res,
          'Validation failed.',
          422,
          error.errors.map((e) => ({ field: e.path.join('.'), message: e.message }))
        )
      }
      next(error)
    }
  }
}
