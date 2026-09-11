// src/services/cloudinary.service.js — Cloudinary upload service (Cloudinary v2 + Multer)
import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import { Readable } from 'stream'

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Use memory storage — we'll upload the buffer directly to Cloudinary
const storage = multer.memoryStorage()

// ── Upload Middleware ──────────────────────────────────────────────────────────

export const uploadImage = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    if (allowed.includes(file.mimetype)) return cb(null, true)
    cb(new Error('Only image files are allowed (JPEG, PNG, WebP, GIF)'))
  },
})

export const uploadDocument = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = ['application/pdf', 'image/jpeg', 'image/png']
    if (allowed.includes(file.mimetype)) return cb(null, true)
    cb(new Error('Only PDF or image files are allowed'))
  },
})

// ── Cloudinary Upload Helper ───────────────────────────────────────────────────

/**
 * Upload a buffer to Cloudinary (works with multer memoryStorage)
 * @param {Buffer} buffer - File buffer from multer
 * @param {Object} options - Cloudinary upload options
 * @returns {Promise<Object>} Cloudinary upload result
 */
export const uploadToCloudinary = (buffer, options = {}) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `omnitaskers/${options.folder || 'uploads'}`,
        quality: 'auto',
        fetch_format: 'auto',
        ...options,
      },
      (error, result) => {
        if (error) return reject(error)
        resolve(result)
      }
    )
    Readable.from(buffer).pipe(uploadStream)
  })
}

/**
 * Delete a file from Cloudinary by its public_id
 */
export const deleteFromCloudinary = async (publicId) => {
  try {
    return await cloudinary.uploader.destroy(publicId)
  } catch (error) {
    console.error('Cloudinary delete error:', error)
    throw error
  }
}

/**
 * Get optimized URL for an image
 */
export const getOptimizedUrl = (publicId, options = {}) => {
  return cloudinary.url(publicId, {
    quality: 'auto',
    fetch_format: 'auto',
    ...options,
  })
}

export { cloudinary }
