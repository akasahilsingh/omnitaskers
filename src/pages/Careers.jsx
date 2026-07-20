import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { CONTACT } from '../lib/constants'

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

const openPositions = [
  {
    title: 'Warehouse Operations Supervisor',
    location: 'Pan India',
    type: 'Full-time',
    description: 'Lead and manage warehouse teams across client locations, ensuring operational efficiency and quality standards.',
  },
  {
    title: 'Logistics Coordinator',
    location: 'Pan India',
    type: 'Full-time',
    description: 'Coordinate logistics operations including dispatch, delivery support, and hub management activities.',
  },
  {
    title: 'Facility Management Executive',
    location: 'Pan India',
    type: 'Full-time',
    description: 'Oversee facility management services including housekeeping, maintenance, and general facility support.',
  },
  {
    title: 'Recruitment & Staffing Associate',
    location: 'Pan India',
    type: 'Full-time',
    description: 'Source, screen, and onboard workforce for various client projects and operational requirements.',
  },
]

function Careers() {
  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <PageHero
        badge="Join Our Team"
        title="Careers at Omnitaskers"
        subtitle="Be part of a dynamic team that's shaping the future of integrated operations and workforce solutions across India."
      />

      {/* Values for employees */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container-inner">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block', background: 'rgba(13,148,136,0.08)',
              color: '#0D9488', padding: '5px 14px', borderRadius: '99px',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              Why Work With Us
            </span>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#0B3D6E',
              letterSpacing: '-0.025em', marginBottom: '0.75rem',
            }}>
              Grow With Omnitaskers
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto' }}>
              We create a respectful and growth-oriented environment for our workforce, recognizing that skilled, motivated and valued people are the foundation of successful operations.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { emoji: '🚀', title: 'Growth Opportunities', desc: 'Clear career progression paths with continuous learning and development programs.' },
              { emoji: '🤝', title: 'People First Culture', desc: 'A workplace built on respect, inclusivity, and recognition of individual contributions.' },
              { emoji: '🌍', title: 'Pan-India Exposure', desc: 'Work across diverse industries and locations, gaining broad operational experience.' },
              { emoji: '💡', title: 'Innovation Driven', desc: 'Encouragement to bring fresh ideas and improve processes for better outcomes.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  background: 'white', borderRadius: '20px',
                  padding: '2rem 1.5rem', textAlign: 'center',
                  boxShadow: '0 3px 16px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{
                  width: '64px', height: '64px', borderRadius: '20px',
                  background: 'rgba(13,148,136,0.09)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '32px', margin: '0 auto 1.25rem',
                }}>
                  {item.emoji}
                </div>
                <h4 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                  fontSize: '1.1rem', color: '#0B3D6E', marginBottom: '0.6rem',
                }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section style={{ padding: '5rem 0', background: '#F8FAFC' }}>
        <div className="container-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', background: 'rgba(13,148,136,0.08)',
              color: '#0D9488', padding: '5px 14px', borderRadius: '99px',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              Open Positions
            </span>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#0B3D6E',
              letterSpacing: '-0.025em',
            }}>
              Current Opportunities
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            {openPositions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                style={{
                  background: 'white', borderRadius: '18px',
                  padding: '1.75rem 2rem',
                  boxShadow: '0 2px 12px rgba(11,61,110,0.06)',
                  border: '1px solid rgba(0,0,0,0.04)',
                  display: 'flex', flexWrap: 'wrap', gap: '1rem',
                  alignItems: 'center', justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ flex: '1 1 300px' }}>
                  <h4 style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                    fontSize: '1.05rem', color: '#0B3D6E', marginBottom: '0.4rem',
                  }}>
                    {pos.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    {pos.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{
                      background: 'rgba(13,148,136,0.08)', color: '#0D9488',
                      padding: '3px 10px', borderRadius: '99px',
                      fontSize: '0.7rem', fontWeight: 700,
                    }}>
                      {pos.location}
                    </span>
                    <span style={{
                      background: 'rgba(11,61,110,0.06)', color: '#0B3D6E',
                      padding: '3px 10px', borderRadius: '99px',
                      fontSize: '0.7rem', fontWeight: 700,
                    }}>
                      {pos.type}
                    </span>
                  </div>
                </div>
                <a
                  href={`mailto:${CONTACT.email}?subject=Application: ${pos.title}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                    color: 'white', padding: '0.6rem 1.25rem',
                    borderRadius: '12px', fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700, fontSize: '0.85rem',
                    textDecoration: 'none', flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(13,148,136,0.25)',
                  }}
                >
                  Apply <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General application CTA */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container-inner" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
              color: '#0B3D6E', letterSpacing: '-0.025em', marginBottom: '1rem',
            }}>
              Don't See Your Role?
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.75, marginBottom: '2rem' }}>
              We're always looking for talented professionals. Send us your resume and we'll reach out when a suitable opportunity arises.
            </p>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${CONTACT.email}?subject=General Application - Omnitaskers`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #0B3D6E, #0D9488)',
                color: 'white', padding: '0.9rem 2.25rem',
                borderRadius: '14px', fontFamily: 'Outfit, sans-serif',
                fontWeight: 700, fontSize: '1rem',
                boxShadow: '0 8px 28px rgba(11,61,110,0.35)',
                textDecoration: 'none',
              }}
            >
              <Mail size={18} />
              Send Your Resume
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers
