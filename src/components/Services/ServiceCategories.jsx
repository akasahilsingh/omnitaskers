import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionTitle from '../Common/SectionTitle'
import { SERVICES } from '../../lib/mockData'
import * as Icons from 'lucide-react'

const bgGradients = [
  'linear-gradient(135deg, #EBF8FF 0%, #DBEAFE 100%)',
  'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
  'linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)',
  'linear-gradient(135deg, #FDF4FF 0%, #F3E8FF 100%)',
  'linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%)',
]

const iconColors = ['#0B3D6E', '#16A34A', '#EA580C', '#7C3AED', '#BE123C']
const iconBg = [
  'rgba(11,61,110,0.10)',
  'rgba(22,163,74,0.10)',
  'rgba(234,88,12,0.10)',
  'rgba(124,58,237,0.10)',
  'rgba(190,18,60,0.10)',
]

export function ServiceCategories() {
  return (
    <section id="services" style={{ background: '#F8FAFC', padding: '6rem 0' }}>
      <div className="container-inner">
        <SectionTitle
          badge="What We Offer"
          title="Explore Service Categories"
          subtitle="Vetted, professional, and reliable services designed to keep your Omaxe City home in pristine condition"
          className="mb-16"
          style={{ marginBottom: '4rem' }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          marginTop: '3rem',
        }}>
          {SERVICES.map((service, i) => {
            const IconComponent = Icons[service.icon] || Icons.HelpCircle
            return (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = `/services?category=${service.id}`}
                style={{
                  background: bgGradients[i % bgGradients.length],
                  borderRadius: '20px',
                  padding: '1.75rem 1.5rem',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '220px',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'}
              >
                {/* Icon box */}
                <div style={{
                  width: '50px', height: '50px',
                  background: iconBg[i % iconBg.length],
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.1rem',
                }}>
                  <IconComponent style={{ width: '24px', height: '24px', color: iconColors[i % iconColors.length] }} />
                </div>

                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                  fontSize: '1.05rem', color: '#0F172A',
                  marginBottom: '0.5rem', lineHeight: 1.25,
                }}>
                  {service.name}
                </h3>

                <p style={{
                  fontSize: '0.8rem', color: '#64748B',
                  lineHeight: 1.6, flexGrow: 1,
                }}>
                  {service.description}
                </p>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  marginTop: '1.25rem',
                  fontSize: '0.78rem', fontWeight: 700,
                  color: iconColors[i % iconColors.length],
                }}>
                  Explore
                  <ArrowUpRight size={14} />
                </div>

                {/* corner decoration */}
                <div style={{
                  position: 'absolute', top: '-20px', right: '-20px',
                  width: '80px', height: '80px',
                  background: iconBg[i % iconBg.length],
                  borderRadius: '50%',
                }} />
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories
