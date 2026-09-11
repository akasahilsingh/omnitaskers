// prisma/seed.js — OmniTaskers Phase 1 Seed Data
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // ── Admin User ─────────────────────────────────────────────────────────────
  const passwordHash = await bcrypt.hash('Admin@Omni2024!', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@omnitaskers.in' },
    update: {},
    create: {
      name: 'OmniTaskers Admin',
      email: 'admin@omnitaskers.in',
      passwordHash,
      role: 'SUPER_ADMIN',
      phone: '+91-9876543210',
    },
  })
  console.log('✅ Admin user created:', admin.email)

  // ── Services ───────────────────────────────────────────────────────────────
  const services = [
    {
      name: 'Warehouse Operations',
      category: 'WAREHOUSE_OPERATIONS',
      description: 'Reliable workforce and operational support for efficient warehouse and logistics management',
      tagline: 'Reliable Workforce. Efficient Operations. Seamless Logistics.',
      icon: 'Warehouse',
      sortOrder: 1,
      subServices: [
        { name: 'Inbound & Outbound Operations', description: 'Efficient management of incoming and outgoing warehouse inventory and shipments' },
        { name: 'Loading & Unloading', description: 'Professional workforce for safe and timely loading and unloading of goods' },
        { name: 'Picking & Packing', description: 'Accurate order picking and professional packing for damage-free dispatch' },
        { name: 'Sorting & Scanning', description: 'Systematic sorting and barcode scanning to maintain inventory accuracy' },
        { name: 'Inventory & Stock Handling', description: 'Comprehensive stock management, cycle counting, and inventory reconciliation' },
        { name: 'Dispatch & Order Fulfilment', description: 'End-to-end order processing and timely dispatch to meet delivery commitments' },
      ],
    },
    {
      name: 'Logistics & Supply Chain',
      category: 'LOGISTICS_SUPPLY_CHAIN',
      description: 'Reliable workforce and operational support across the logistics and supply chain ecosystem',
      tagline: 'From Warehouse to Distribution — We Keep Operations Moving.',
      icon: 'Truck',
      sortOrder: 2,
      subServices: [
        { name: 'Loading & Unloading', description: 'Dedicated teams for efficient loading and unloading at hubs and distribution centres' },
        { name: 'Sorting & Distribution', description: 'Systematic sorting and distribution management for seamless supply chain flow' },
        { name: 'Dispatch & Delivery Support', description: 'Workforce support for timely dispatch and delivery coordination' },
        { name: 'Hub & Warehouse Operations', description: 'Operational support for logistics hubs and regional warehouse centres' },
        { name: 'Last-Mile Support', description: 'Reliable last-mile delivery workforce and logistics supervision' },
        { name: 'Logistics Supervision', description: 'On-ground logistics supervisors for quality control and process management' },
      ],
    },
    {
      name: 'Facility Management',
      category: 'FACILITY_MANAGEMENT',
      description: 'Professional facility management and support services for corporate, commercial, industrial and residential establishments',
      tagline: 'Professional People. Efficient Facilities. Reliable Support.',
      icon: 'Building2',
      sortOrder: 3,
      subServices: [
        { name: 'Housekeeping & Cleaning', description: 'Office, industrial, commercial and residential housekeeping, deep cleaning and sanitation' },
        { name: 'Technical & Maintenance Support', description: 'Electricians, plumbers, carpenters, painters, technicians and repair & maintenance personnel' },
        { name: 'General Facility Support', description: 'Drivers, gardeners, caretakers, security support, office support staff and facility supervisors' },
        { name: 'Car Cleaning Service', description: 'Door-to-door car cleaning with monthly and weekly plan options' },
      ],
    },
    {
      name: 'Manpower Solutions',
      category: 'MANPOWER_SOLUTIONS',
      description: 'Comprehensive workforce solutions including staffing, recruitment, and skilled manpower deployment',
      tagline: 'The Right People. The Right Processes. Dependable Results.',
      icon: 'Users',
      sortOrder: 4,
      subServices: [
        { name: 'Staffing Solutions', description: 'Flexible staffing solutions tailored to seasonal and project-based requirements' },
        { name: 'Workforce Recruitment', description: 'End-to-end recruitment services from sourcing to onboarding qualified candidates' },
        { name: 'Skilled Manpower Deployment', description: 'Deployment of trained and skilled workforce according to required roles and responsibilities' },
        { name: 'Workforce Management', description: 'Continuous workforce performance management, attendance tracking, and supervision' },
      ],
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { id: service.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') },
      update: {},
      create: {
        id: service.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, ''),
        name: service.name,
        category: service.category,
        description: service.description,
        tagline: service.tagline,
        icon: service.icon,
        sortOrder: service.sortOrder,
        subServices: service.subServices,
      },
    })
  }
  console.log('✅ Services seeded:', services.length)

  // ── Testimonials ───────────────────────────────────────────────────────────
  const testimonials = [
    { clientName: 'Rajesh Gupta', company: 'E-Commerce Company', designation: 'Operations Head', rating: 5, initials: 'RG', quote: 'Omnitaskers has transformed our warehouse operations. Their trained workforce handles our picking and packing with remarkable accuracy, helping us meet our dispatch targets consistently.', sortOrder: 1 },
    { clientName: 'Priya Sharma', company: 'Corporate Park', designation: 'Facility Manager', rating: 5, initials: 'PS', quote: 'The housekeeping and technical maintenance staff provided by Omnitaskers are professional and reliable. Our facility has never been better managed.', sortOrder: 2 },
    { clientName: 'Vikram Singh', company: 'Distribution Company', designation: 'Logistics Director', rating: 5, initials: 'VS', quote: 'Their logistics support team has been instrumental in keeping our supply chain running smoothly. From hub operations to last-mile, they deliver consistent results.', sortOrder: 3 },
    { clientName: 'Anita Verma', company: 'Manufacturing Firm', designation: 'HR Director', rating: 5, initials: 'AV', quote: 'Finding reliable manpower used to be our biggest challenge. Omnitaskers provides skilled, vetted workforce that integrates seamlessly with our operations.', sortOrder: 4 },
    { clientName: 'Suresh Patel', company: 'Infrastructure Company', designation: 'Project Manager', rating: 4, initials: 'SP', quote: 'Their project support and manpower solutions helped us complete our construction timeline ahead of schedule. A truly dependable operations partner.', sortOrder: 5 },
    { clientName: 'Deepika Mehta', company: 'Fulfilment Centre', designation: 'COO', rating: 5, initials: 'DM', quote: 'We scaled our operations by 3x during the festive season with Omnitaskers\' flexible staffing solutions. Excellent workforce quality and management.', sortOrder: 6 },
  ]

  for (const t of testimonials) {
    await prisma.testimonial.create({ data: t }).catch(() => {})
  }
  console.log('✅ Testimonials seeded:', testimonials.length)

  // ── FAQ ────────────────────────────────────────────────────────────────────
  const faqs = [
    { question: 'What industries does Omnitaskers serve?', answer: 'We serve businesses across E-Commerce & Fulfilment, Logistics & Supply Chain, Corporate & Commercial establishments, and Infrastructure, Projects & Real Estate sectors. Our integrated solutions are designed to adapt to the specific operational needs of each industry.', sortOrder: 1 },
    { question: 'How does Omnitaskers ensure workforce quality?', answer: 'Every member of our workforce undergoes a thorough screening process including identity verification, skill assessment, and background checks. We also provide continuous training and performance monitoring to maintain high service standards.', sortOrder: 2 },
    { question: 'Can Omnitaskers scale workforce based on seasonal demand?', answer: 'Absolutely. Our flexible staffing model is designed to scale up or down based on your business requirements. Whether you need additional warehouse staff during peak season or temporary project-based manpower, we can deploy trained teams quickly.', sortOrder: 3 },
    { question: 'What is included in your Facility Management services?', answer: 'Our Facility Management services include housekeeping & cleaning, technical & maintenance support (electricians, plumbers, carpenters, painters), general facility support (drivers, gardeners, caretakers, security), and door-to-door car cleaning services.', sortOrder: 4 },
    { question: 'How does the engagement process work?', answer: 'We follow a structured operating model: first we understand your specific requirements, then develop a customized manpower and service plan, screen and select suitable workforce, deploy them at your location, continuously manage and monitor performance, and improve based on feedback.', sortOrder: 5 },
    { question: 'Do you provide 24/7 operational support?', answer: 'Yes, we provide 24x7 operational support to ensure business continuity. Our team is available round-the-clock for workforce management, issue resolution, and emergency operational requirements.', sortOrder: 6 },
  ]

  for (const faq of faqs) {
    await prisma.faq.create({ data: faq }).catch(() => {})
  }
  console.log('✅ FAQs seeded:', faqs.length)

  // ── Company Settings ───────────────────────────────────────────────────────
  const settings = [
    { key: 'company_name', value: 'Omnitaskers Solution Private Limited' },
    { key: 'company_email', value: 'hello@omnitaskers.in' },
    { key: 'company_phone', value: '+91-9876543210' },
    { key: 'company_whatsapp', value: '919876543210' },
    { key: 'company_address', value: 'Lucknow, Uttar Pradesh, India' },
    { key: 'company_tagline', value: 'Reliable People. Efficient Operations. Better Business.' },
  ]

  for (const setting of settings) {
    await prisma.companySetting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    })
  }
  console.log('✅ Company settings seeded')

  console.log('')
  console.log('🎉 Database seeded successfully!')
  console.log('')
  console.log('Admin credentials:')
  console.log('  Email:    admin@omnitaskers.in')
  console.log('  Password: Admin@Omni2024!')
  console.log('')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
