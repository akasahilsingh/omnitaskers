// src/server.js — Application entry point
import 'dotenv/config'
import app from './app.js'
import { prisma } from './utils/prisma.js'

const PORT = process.env.PORT || 5000

async function startServer() {
  try {
    // Test database connection
    await prisma.$connect()
    console.log('✅ Database connected successfully')

    app.listen(PORT, () => {
      console.log('')
      console.log('🚀 OmniTaskers API Server')
      console.log(`   Environment: ${process.env.NODE_ENV}`)
      console.log(`   Port:        ${PORT}`)
      console.log(`   URL:         http://localhost:${PORT}`)
      console.log(`   Health:      http://localhost:${PORT}/health`)
      console.log('')
    })
  } catch (error) {
    console.error('❌ Failed to start server:', error)
    await prisma.$disconnect()
    process.exit(1)
  }
}

// Graceful shutdown
const shutdown = async (signal) => {
  console.log(`\n${signal} received. Shutting down gracefully...`)
  await prisma.$disconnect()
  process.exit(0)
}

process.on('SIGTERM', () => shutdown('SIGTERM'))
process.on('SIGINT', () => shutdown('SIGINT'))

startServer()
