import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Phone, CheckCircle } from 'lucide-react'
import { CONTACT } from '../../lib/constants'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] },
})

const highlights = [
  'Trained & Verified Workforce',
  'Scalable Manpower Solutions',
  '24×7 Operational Support',
  'Multi-Industry Expertise',
]

export function HeroSection() {
  const handleWhatsApp = () => {
    const msg = "Hi Omnitaskers! I'd like to discuss workforce and operational solutions for my business."
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(150deg, #071F38 0%, #0B3D6E 45%, #0F4F8C 75%, #0B3D6E 100%)',
      }}
    >
      {/* Animated orbs */}
      <motion.div
        className="hero-orb"
        animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.30, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-10%', right: '5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, #0D9488 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        className="hero-orb"
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, delay: 3, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '-15%', left: '-5%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 50%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div className="container-inner" style={{ position: 'relative', zIndex: 10, padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">

          {/* ── Left Text ── */}
          <div style={{ maxWidth: '680px' }}>
            {/* Badge */}
            <motion.div {...fadeUp(0.1)}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(13,148,136,0.18)',
                border: '1px solid rgba(13,148,136,0.35)',
                padding: '6px 16px', borderRadius: '99px',
                color: '#5EEAD4', fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: '#14B8A6', animation: 'pulse-glow 2s infinite',
                  flexShrink: 0,
                }} />
                Integrated Operations & Workforce Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.2)} style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 900,
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              lineHeight: 1.1, letterSpacing: '-0.03em',
              color: 'white', marginBottom: '1.25rem',
            }}>
              Reliable People.{' '}
              <span style={{
                background: 'linear-gradient(90deg, #14B8A6, #0D9488)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Efficient Operations.
              </span>
              {' '}Better Business.
            </motion.h1>

            {/* Subtext */}
            <motion.p {...fadeUp(0.3)} style={{
              fontSize: '1.1rem', color: 'rgba(186, 230, 253, 0.85)',
              lineHeight: 1.75, marginBottom: '2rem', maxWidth: '560px',
            }}>
              Omnitaskers Solution Private Limited is an integrated operations and workforce solutions company specializing in Warehouse Operations, Logistics Support, Manpower Solutions and Facility Management Services.
            </motion.p>

            {/* Corporate Statement */}
            <motion.p {...fadeUp(0.34)} style={{
              fontSize: '0.95rem', color: 'rgba(94, 234, 212, 0.90)',
              lineHeight: 1.65, marginBottom: '2rem', maxWidth: '560px',
              fontStyle: 'italic', fontWeight: 600,
              paddingLeft: '1rem',
              borderLeft: '3px solid rgba(20,184,166,0.50)',
            }}>
              "We provide the workforce, operational support and facility solutions that keep businesses moving."
            </motion.p>

            {/* Highlights */}
            <motion.div {...fadeUp(0.38)} style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem' }} className="highlights-grid">
                {highlights.map((h) => (
                  <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={15} style={{ color: '#14B8A6', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(186, 230, 253, 0.80)', fontWeight: 500 }}>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.45)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/contact"
                className="btn btn-teal btn-lg"
                style={{ gap: '8px' }}
              >
                Get In Touch
                <ArrowRight size={18} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleWhatsApp}
                className="btn btn-white btn-lg"
                style={{ gap: '8px' }}
              >
                <MessageCircle size={18} style={{ color: '#25D366' }} />
                WhatsApp Us
              </motion.button>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              {...fadeUp(0.55)}
              style={{
                display: 'flex', gap: '2rem', flexWrap: 'wrap',
                marginTop: '3rem', paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {[
                { value: '100%', label: 'Service Quality' },
                { value: '24×7', label: 'Operational Support' },
                { value: 'Multi', label: 'Industry Capability' },
                { value: 'Scalable', label: 'Workforce Solutions' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                    fontSize: '1.6rem', color: 'white',
                    lineHeight: 1, letterSpacing: '-0.02em',
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '0.76rem', color: 'rgba(148,208,210,0.95)', fontWeight: 500, marginTop: '3px' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="hero-card-col"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: '-16px',
                background: 'linear-gradient(135deg, rgba(13,148,136,0.3), rgba(11,61,110,0.3))',
                borderRadius: '40px', filter: 'blur(30px)',
                animation: 'float 6s ease-in-out infinite',
              }} />

              {/* Main card */}
              <motion.div
                whileHover={{ y: -6 }}
                style={{
                  position: 'relative',
                  background: 'rgba(255,255,255,0.97)',
                  borderRadius: '24px',
                  padding: '2rem',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Card header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '52px', height: '52px',
                    background: 'linear-gradient(135deg, rgba(13,148,136,0.12), rgba(11,61,110,0.08))',
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '28px',
                  }}>
                    🏭
                  </div>
                  <span style={{
                    background: 'rgba(13,148,136,0.10)', color: '#0F766E',
                    padding: '4px 12px', borderRadius: '99px',
                    fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: '0.05em', textTransform: 'uppercase',
                  }}>
                    B2B Solutions
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                  fontSize: '1.4rem', color: '#0B3D6E', marginBottom: '0.5rem',
                }}>
                  Integrated Business Solutions
                </h3>
                <p style={{ fontSize: '0.83rem', color: '#64748B', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Your single, trusted platform for workforce, operational support, and facility solutions.
                </p>

                {/* Features list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                  {[
                    { text: 'Warehouse & Logistics Operations', color: '#0D9488' },
                    { text: 'Professional Facility Management', color: '#0D9488' },
                    { text: 'Skilled Manpower Deployment', color: '#0D9488' },
                    { text: 'Scalable & Cost-Effective Solutions', color: '#0D9488' },
                  ].map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '20px', height: '20px', borderRadius: '50%',
                        background: 'rgba(13,148,136,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <span style={{ color: f.color, fontSize: '11px', fontWeight: 800 }}>✓</span>
                      </div>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* Tagline */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  marginTop: '1.5rem', paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(0,0,0,0.07)',
                }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B', fontStyle: 'italic' }}>
                    "We connect the right people with the right processes."
                  </span>
                </div>
              </motion.div>

              {/* Floating badge - top right */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: '-18px', right: '-18px',
                  background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                  padding: '12px', borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(13,148,136,0.40)',
                  border: '3px solid white',
                }}
              >
                <span style={{ fontSize: '22px' }}>⚡</span>
              </motion.div>

              {/* Floating badge - bottom left */}
              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', bottom: '-18px', left: '-18px',
                  background: 'linear-gradient(135deg, #0B3D6E, #0F4F8C)',
                  padding: '12px', borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(11,61,110,0.40)',
                  border: '3px solid white',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
              >
                <span style={{ fontSize: '20px' }}>🛡️</span>
                <div>
                  <p style={{ color: 'white', fontSize: '0.7rem', fontWeight: 700, lineHeight: 1 }}>Trusted</p>
                  <p style={{ color: 'rgba(148,208,210,0.95)', fontSize: '0.63rem', lineHeight: 1, marginTop: '2px' }}>Operations Partner</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 27.5C672 35 768 40 864 37.5C960 35 1056 25 1152 20C1248 15 1344 15 1392 15L1440 15V60H0Z" fill="white" />
        </svg>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
          .hero-card-col { display: flex !important; }
        }
        @media (max-width: 1023px) {
          .hero-card-col { display: none !important; }
          /* Hide expensive blur orbs on tablet/mobile */
          .hero-orb { display: none !important; }
        }
        @media (max-width: 480px) {
          .highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
