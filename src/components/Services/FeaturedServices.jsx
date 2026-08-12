import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../Common/SectionTitle'
import { FEATURED_SERVICES } from '../../lib/mockData'

const emojiColors = {
  '🏭': 'rgba(13,148,136,0.10)',
  '🚛': 'rgba(11,61,110,0.10)',
  '🏢': 'rgba(124,58,237,0.10)',
  '🔧': 'rgba(234,88,12,0.10)',
  '👥': 'rgba(22,163,74,0.10)',
  '📦': 'rgba(59,130,246,0.10)',
}

export function FeaturedServices() {
  const handleClick = (category) => {
    const mapped = category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')
    window.location.href = `/services?category=${mapped}`
  }

  return (
    <section style={{ background: 'white', padding: '6rem 0' }}>
      <div className="container-inner">
        <SectionTitle
          badge="Key Solutions"
          title="Featured Services"
          subtitle="Our most sought-after operational and workforce solutions across industries"
          style={{ marginBottom: '4rem' }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
        }}>
          {FEATURED_SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'white',
                borderRadius: '22px',
                boxShadow: '0 4px 20px rgba(11,61,110,0.07)',
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                border: '1px solid rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 24px 60px rgba(11,61,110,0.14)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(11,61,110,0.07)'}
            >
              {/* Image area */}
              <div style={{
                height: '160px',
                background: `linear-gradient(135deg, ${emojiColors[service.image] ? emojiColors[service.image].replace('0.10', '0.15') : 'rgba(248,250,252,1)'} 0%, rgba(241,245,249,1) 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '4rem',
                position: 'relative',
              }}>
                {service.image}
                <span style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: 'rgba(255,255,255,0.95)',
                  color: '#0D9488', fontSize: '0.65rem', fontWeight: 700,
                  padding: '4px 10px', borderRadius: '99px',
                  letterSpacing: '0.05em', textTransform: 'uppercase',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}>
                  {service.category}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                  fontSize: '1.05rem', color: '#0B3D6E',
                  marginBottom: '0.5rem',
                }}>
                  {service.name}
                </h3>
                <p style={{
                  fontSize: '0.82rem', color: '#64748B',
                  lineHeight: 1.65, flexGrow: 1, marginBottom: '1.25rem',
                }}>
                  {service.description}
                </p>

                {/* Footer */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600 }}>
                    Professional Service
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleClick(service.category)}
                    style={{
                      background: 'linear-gradient(135deg, #0B3D6E, #0D9488)',
                      color: 'white',
                      padding: '0.55rem 1.2rem',
                      borderRadius: '12px',
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 700, fontSize: '0.82rem',
                      display: 'flex', alignItems: 'center', gap: '5px',
                      boxShadow: '0 4px 16px rgba(11,61,110,0.25)',
                      cursor: 'pointer',
                    }}
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.location.href = '/services'}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent',
              color: '#0B3D6E',
              padding: '0.8rem 2rem',
              borderRadius: '14px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700, fontSize: '0.95rem',
              border: '2px solid rgba(11,61,110,0.18)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#0B3D6E'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.borderColor = '#0B3D6E'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#0B3D6E'
              e.currentTarget.style.borderColor = 'rgba(11,61,110,0.18)'
            }}
          >
            View All Services
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
