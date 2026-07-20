import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '../lib/mockData'

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

const valueIcons = {
  Reliability: '🤝',
  'People First': '👥',
  'Operational Excellence': '⭐',
  Integrity: '💎',
  Responsibility: '🛡️',
  'Continuous Improvement': '📈',
}
const valueColors = [
  { bg: 'rgba(13,148,136,0.09)', color: '#0D9488' },
  { bg: 'rgba(245,158,11,0.09)', color: '#D97706' },
  { bg: 'rgba(11,61,110,0.09)', color: '#0B3D6E' },
  { bg: 'rgba(124,58,237,0.09)', color: '#7C3AED' },
  { bg: 'rgba(234,88,12,0.09)', color: '#EA580C' },
  { bg: 'rgba(16,163,74,0.09)', color: '#16A34A' },
]

function About() {
  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <PageHero
        badge="Company Profile"
        title="About Omnitaskers"
        subtitle={COMPANY_INFO.tagline}
      />

      {/* Who We Are — two-column */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container-inner">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
            alignItems: 'center',
          }} className="about-two-col">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span style={{
                display: 'inline-block', background: 'rgba(13,148,136,0.08)',
                color: '#0D9488', padding: '5px 14px', borderRadius: '99px',
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', marginBottom: '1.25rem',
              }}>
                Our Heritage
              </span>
              <h2 style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: '#0B3D6E', letterSpacing: '-0.025em', marginBottom: '1.5rem',
              }}>
                Who We Are
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  COMPANY_INFO.description,
                  COMPANY_INFO.detailedDescription,
                  COMPANY_INFO.partnerStatement,
                ].map((text, i) => (
                  <p key={i} style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.8 }}>{text}</p>
                ))}
                <p style={{
                  fontSize: '1rem', color: '#0D9488',
                  fontWeight: 700, fontStyle: 'italic',
                  lineHeight: 1.7, marginTop: '0.5rem',
                  fontFamily: 'Outfit, sans-serif',
                }}>
                  We connect people. We simplify operations. We create solutions.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'linear-gradient(135deg, #0B3D6E, #0D9488)',
                  color: 'white', padding: '0.8rem 2rem',
                  borderRadius: '14px', fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700, fontSize: '0.95rem',
                  boxShadow: '0 6px 24px rgba(11,61,110,0.28)',
                  marginTop: '2rem', textDecoration: 'none',
                }}
              >
                Get In Touch <ArrowRight size={17} />
              </motion.a>
            </motion.div>

            {/* Visual card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              {/* Main card */}
              <div style={{
                background: 'linear-gradient(135deg, #071F38 0%, #0B3D6E 60%, #0D9488 100%)',
                borderRadius: '28px', padding: '3rem 2.5rem',
                boxShadow: '0 32px 80px rgba(11,61,110,0.30)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: '-60px', right: '-60px',
                  width: '200px', height: '200px',
                  background: 'rgba(13,148,136,0.20)', borderRadius: '50%', filter: 'blur(40px)',
                }} />
                <motion.div
                  animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ fontSize: '6rem', textAlign: 'center', marginBottom: '1.5rem' }}
                >
                  🏭
                </motion.div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                  fontSize: '1.4rem', color: 'white', textAlign: 'center', marginBottom: '0.5rem',
                }}>
                  Omnitaskers
                </h3>
                <p style={{
                  color: 'rgba(186,230,253,0.70)', textAlign: 'center',
                  fontSize: '0.85rem', lineHeight: 1.65,
                }}>
                  Integrated Operations & Workforce Solutions Partner
                </p>

                {/* Stats row */}
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: '1px', background: 'rgba(255,255,255,0.12)',
                  borderRadius: '16px', overflow: 'hidden', marginTop: '2rem',
                }}>
                  {[
                    { v: '100%', l: 'Service Quality' },
                    { v: '24×7', l: 'Operational Support' },
                    { v: 'Multi', l: 'Industry Capability' },
                    { v: 'Scalable', l: 'Workforce Solutions' },
                  ].map(s => (
                    <div key={s.l} style={{
                      background: 'rgba(255,255,255,0.07)',
                      padding: '1rem', textAlign: 'center',
                    }}>
                      <p style={{
                        fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                        fontSize: '1.3rem', color: 'white',
                      }}>
                        {s.v}
                      </p>
                      <p style={{ fontSize: '0.68rem', color: 'rgba(148,208,210,0.75)', fontWeight: 600 }}>
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: '-16px', right: '-16px',
                  background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                  padding: '12px 16px', borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(13,148,136,0.40)',
                  border: '3px solid white',
                }}
              >
                <span style={{ fontSize: '22px' }}>⚡</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '5rem 0', background: '#F8FAFC' }}>
        <div className="container-inner">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              {
                icon: '🎯', emoji_bg: 'rgba(13,148,136,0.10)', title: 'Our Mission',
                content: COMPANY_INFO.mission,
                accent: '#0D9488',
              },
              {
                icon: '🌟', emoji_bg: 'rgba(11,61,110,0.10)', title: 'Our Vision',
                content: COMPANY_INFO.vision,
                accent: '#0B3D6E',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -5 }}
                style={{
                  background: 'white', borderRadius: '24px',
                  padding: '2.5rem',
                  boxShadow: '0 4px 20px rgba(11,61,110,0.07)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 50px rgba(11,61,110,0.13)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(11,61,110,0.07)'}
              >
                {/* Top accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                  background: `linear-gradient(90deg, ${item.accent}, #0D9488)`,
                }} />
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: item.emoji_bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px', marginBottom: '1.5rem',
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                  fontSize: '1.35rem', color: '#0B3D6E', marginBottom: '0.85rem',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.8 }}>
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container-inner">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block', background: 'rgba(13,148,136,0.08)',
              color: '#0D9488', padding: '5px 14px', borderRadius: '99px',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              What We Stand For
            </span>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#0B3D6E',
              letterSpacing: '-0.025em',
            }}>
              Our Core Values
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', marginTop: '0.75rem' }}>
              The fundamental principles defining the way we work and the relationships we build
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}>
            {COMPANY_INFO.values.map((value, i) => {
              const color = valueColors[i % valueColors.length]
              return (
                <motion.div
                  key={value.title}
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
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 16px 40px ${color.bg.replace('0.09', '0.25')}, 0 4px 12px rgba(0,0,0,0.06)`
                    e.currentTarget.style.borderColor = 'transparent'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 3px 16px rgba(0,0,0,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '20px',
                    background: color.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '32px', margin: '0 auto 1.25rem',
                  }}>
                    {valueIcons[value.title] || '✨'}
                  </div>
                  <h4 style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                    fontSize: '1.1rem', color: '#0B3D6E', marginBottom: '0.6rem',
                  }}>
                    {value.title}
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.7 }}>
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section style={{
        background: 'linear-gradient(135deg, #071F38 0%, #0B3D6E 50%, #0D9488 100%)',
        padding: '4rem 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        <div className="container-inner" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1px', background: 'rgba(255,255,255,0.12)',
            borderRadius: '20px', overflow: 'hidden',
          }}>
            {[
              { v: '100%', l: 'Service Quality Commitment' },
              { v: '24×7', l: 'Operational Support' },
              { v: 'Multi', l: 'Industry Service Capability' },
              { v: 'Scalable', l: 'Workforce Solutions' },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.06)', padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                }}
              >
                <p style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 900,
                  fontSize: '2.2rem', color: 'white',
                  letterSpacing: '-0.03em', lineHeight: 1,
                }}>
                  {s.v}
                </p>
                <p style={{
                  fontSize: '0.76rem', color: 'rgba(148,208,210,0.75)',
                  fontWeight: 600, marginTop: '8px', letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  {s.l}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              Let's Build Better Operations Together
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.75, marginBottom: '2rem' }}>
              Discover how Omnitaskers can streamline your operations and provide reliable workforce solutions for your business.
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
              Contact Us <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .about-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default About
