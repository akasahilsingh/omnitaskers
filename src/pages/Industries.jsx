import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { INDUSTRIES } from '../lib/mockData'

function PageHero({ title, subtitle, badge }) {
  return (
    <section style={{
      background: 'linear-gradient(150deg, #071F38 0%, #0B3D6E 50%, #0F4F8C 80%, #0D9488 100%)',
      padding: '5rem 0 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-15%', right: '5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, #14B8A6, transparent 70%)',
          filter: 'blur(70px)', borderRadius: '50%', pointerEvents: 'none',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '50px 50px', pointerEvents: 'none',
      }} />
      <div className="container-inner" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '680px', margin: '0 auto' }}
        >
          {badge && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(13,148,136,0.18)', border: '1px solid rgba(13,148,136,0.35)',
              padding: '6px 16px', borderRadius: '99px',
              color: '#5EEAD4', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem',
            }}>
              {badge}
            </span>
          )}
          <h1 style={{
            fontFamily: 'Outfit, sans-serif', fontWeight: 900,
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            color: 'white', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem',
          }}>
            {title}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(186, 230, 253, 0.82)', lineHeight: 1.75 }}>
            {subtitle}
          </p>
        </motion.div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" fill="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0 48L360 28C720 8 1080 8 1440 28V48H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

function Industries() {
  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <PageHero
        badge="Industries We Serve"
        title="Supporting Businesses Across Industries"
        subtitle="At Omnitaskers Solution Private Limited, we provide integrated workforce, operational and business support solutions across diverse industries."
      />

      {/* Industries Grid */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container-inner">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block', background: 'rgba(13,148,136,0.08)',
              color: '#0D9488', padding: '5px 14px', borderRadius: '99px',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              Our Expertise
            </span>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#0B3D6E',
              letterSpacing: '-0.025em', marginBottom: '0.75rem',
            }}>
              Industries We Empower
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto' }}>
              Our expertise enables organizations to improve efficiency, manage operations effectively and achieve sustainable growth.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {INDUSTRIES.map((industry, i) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -6 }}
                style={{
                  background: 'white', borderRadius: '24px',
                  padding: '2.5rem',
                  boxShadow: '0 4px 20px rgba(11,61,110,0.07)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 20px 50px ${industry.color.bg.replace('0.10', '0.25')}`
                  e.currentTarget.style.borderColor = industry.color.accent
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(11,61,110,0.07)'
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                  background: `linear-gradient(90deg, ${industry.color.accent}, #0D9488)`,
                }} />
                <div style={{
                  width: '64px', height: '64px', borderRadius: '20px',
                  background: industry.color.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '32px', marginBottom: '1.5rem',
                }}>
                  {industry.icon}
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                  fontSize: '1.25rem', color: '#0B3D6E', marginBottom: '0.85rem',
                }}>
                  {industry.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.8 }}>
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #071F38 0%, #0B3D6E 50%, #0D9488 100%)',
        padding: '4rem 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        <div className="container-inner" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
              color: 'white', letterSpacing: '-0.025em', marginBottom: '1rem',
            }}>
              One Partner. Multiple Industries. Integrated Solutions.
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(186,230,253,0.75)', lineHeight: 1.75, marginBottom: '2rem' }}>
              Whatever your industry, Omnitaskers delivers reliable workforce and operational solutions tailored to your unique business needs.
            </p>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'white', color: '#0B3D6E',
                padding: '0.9rem 2.25rem', borderRadius: '14px',
                fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem',
                boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
                textDecoration: 'none',
              }}
            >
              Discuss Your Requirements <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Industries
