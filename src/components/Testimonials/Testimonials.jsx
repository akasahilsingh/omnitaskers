import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionTitle from '../Common/SectionTitle'
import { TESTIMONIALS } from '../../lib/mockData'

const avatarColors = [
  { bg: 'linear-gradient(135deg, #0B3D6E, #0D9488)', text: 'white' },
  { bg: 'linear-gradient(135deg, #7C3AED, #0D9488)', text: 'white' },
  { bg: 'linear-gradient(135deg, #EA580C, #F59E0B)', text: 'white' },
  { bg: 'linear-gradient(135deg, #BE123C, #0D9488)', text: 'white' },
  { bg: 'linear-gradient(135deg, #16A34A, #0B3D6E)', text: 'white' },
  { bg: 'linear-gradient(135deg, #0D9488, #7C3AED)', text: 'white' },
]

export function Testimonials() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #F8FAFC 0%, white 100%)',
      padding: '6rem 0',
    }}>
      <div className="container-inner">
        <SectionTitle
          badge="Client Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by businesses across industries for reliable workforce and operational solutions"
          style={{ marginBottom: '4rem' }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
        }}>
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              style={{
                background: 'white',
                borderRadius: '22px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(11,61,110,0.07)',
                display: 'flex', flexDirection: 'column',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 24px 60px rgba(11,61,110,0.13)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(11,61,110,0.07)'}
            >
              {/* Top accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, #0B3D6E, #0D9488)',
                borderRadius: '22px 22px 0 0',
              }} />

              {/* Header: stars + quote icon */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={15}
                      style={{
                        color: idx < testimonial.rating ? '#F59E0B' : '#E2E8F0',
                        fill: idx < testimonial.rating ? '#F59E0B' : 'none',
                      }}
                    />
                  ))}
                </div>
                <Quote size={32} style={{ color: 'rgba(13,148,136,0.15)', transform: 'rotate(180deg)' }} />
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '0.88rem', color: '#334155',
                lineHeight: 1.75, fontStyle: 'italic',
                flexGrow: 1, marginBottom: '1.5rem',
              }}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: avatarColors[i % avatarColors.length].bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                  <span style={{
                    color: avatarColors[i % avatarColors.length].text,
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 800, fontSize: '0.75rem',
                    letterSpacing: '0.04em',
                  }}>
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                    fontSize: '0.92rem', color: '#0B3D6E',
                  }}>
                    {testimonial.name}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500, marginTop: '2px' }}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
