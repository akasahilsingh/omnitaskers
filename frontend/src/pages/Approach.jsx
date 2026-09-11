import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HOW_IT_WORKS } from '../lib/mockData'

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

const stepColors = [
  { bg: 'rgba(13,148,136,0.10)', accent: '#0D9488', emoji: '🔍' },
  { bg: 'rgba(11,61,110,0.10)', accent: '#0B3D6E', emoji: '📋' },
  { bg: 'rgba(124,58,237,0.10)', accent: '#7C3AED', emoji: '🎯' },
  { bg: 'rgba(234,88,12,0.10)', accent: '#EA580C', emoji: '🚀' },
  { bg: 'rgba(16,163,74,0.10)', accent: '#16A34A', emoji: '📊' },
  { bg: 'rgba(245,158,11,0.10)', accent: '#D97706', emoji: '📈' },
]

function Approach() {
  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <PageHero
        badge="Our Operating Model"
        title="How We Work"
        subtitle="Our operating model is designed to deliver reliable, efficient and result-oriented solutions through a structured and transparent process."
      />

      {/* Process Description */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container-inner">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block', background: 'rgba(13,148,136,0.08)',
              color: '#0D9488', padding: '5px 14px', borderRadius: '99px',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              Our Process
            </span>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#0B3D6E',
              letterSpacing: '-0.025em', marginBottom: '0.75rem',
            }}>
              A Structured Approach to Operational Excellence
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto' }}>
              Understand. Plan. Recruit. Deploy. Manage. Improve.
            </p>
          </div>

          {/* Steps grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {HOW_IT_WORKS.map((step, i) => {
              const color = stepColors[i % stepColors.length]
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  whileHover={{ y: -5 }}
                  style={{
                    background: 'white', borderRadius: '24px',
                    padding: '2.5rem',
                    boxShadow: '0 4px 20px rgba(11,61,110,0.07)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    position: 'relative', overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 20px 50px ${color.bg.replace('0.10', '0.25')}`
                    e.currentTarget.style.borderColor = color.accent
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(11,61,110,0.07)'
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                    background: `linear-gradient(90deg, ${color.accent}, #0D9488)`,
                  }} />

                  {/* Step number + icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '56px', height: '56px', borderRadius: '16px',
                      background: color.bg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '28px',
                    }}>
                      {color.emoji}
                    </div>
                    <div>
                      <span style={{
                        fontSize: '0.68rem', fontWeight: 700, color: color.accent,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <h3 style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                    fontSize: '1.35rem', color: '#0B3D6E', marginBottom: '0.85rem',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.8 }}>
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section style={{ padding: '5rem 0', background: '#F8FAFC' }}>
        <div className="container-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'white', borderRadius: '24px', padding: '3rem',
              boxShadow: '0 4px 24px rgba(11,61,110,0.08)',
            }}
          >
            <h3 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: '1.4rem', color: '#0B3D6E', marginBottom: '1.5rem',
            }}>
              Our Commitment to Excellence
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.8, marginBottom: '1rem' }}>
              At Omnitaskers Solution Private Limited, our operating model is designed to deliver reliable, efficient and result-oriented solutions through a structured and transparent process.
            </p>
            <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.8, marginBottom: '1rem' }}>
              We begin by understanding our client's specific operational requirements, followed by developing a customized manpower and service plan. We then identify, screen and select suitable workforce according to the required skills and responsibilities, before deploying them at the client's location.
            </p>
            <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.8 }}>
              Once deployed, our team continuously manages and monitors workforce performance and operational activities to ensure efficiency and service quality. Based on client feedback, performance outcomes and changing business requirements, we continuously improve our processes and solutions to deliver better results and long-term value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Streamline Your Operations?
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.75, marginBottom: '2rem' }}>
              Let us understand your requirements and build a customized workforce solution for your business.
            </p>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                color: 'white', padding: '0.9rem 2.25rem',
                borderRadius: '14px', fontFamily: 'Outfit, sans-serif',
                fontWeight: 700, fontSize: '1rem',
                boxShadow: '0 8px 28px rgba(13,148,136,0.35)',
                textDecoration: 'none',
              }}
            >
              Talk to Our Team <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Approach
