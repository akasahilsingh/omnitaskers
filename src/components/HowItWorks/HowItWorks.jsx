import { motion } from 'framer-motion'
import SectionTitle from '../Common/SectionTitle'
import { HOW_IT_WORKS } from '../../lib/mockData'

const stepColors = ['#0B3D6E', '#0D9488', '#0B3D6E', '#0D9488']

export function HowItWorks() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)',
      padding: '6rem 0',
      overflow: 'hidden',
    }}>
      <div className="container-inner">
        <SectionTitle
          badge="Simple Process"
          title="How It Works"
          subtitle="A simple, transparent process to get your home tasks handled by local experts"
          style={{ marginBottom: '4rem' }}
        />

        <div className="how-it-works-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          marginTop: '3.5rem',
          position: 'relative',
        }}>
          {/* Connector line for desktop — runs through circle centers */}
          <div className="how-connector" style={{
            position: 'absolute',
            top: '36px',
            left: 'calc(12.5% + 0px)',
            right: 'calc(12.5% + 0px)',
            height: '2px',
            background: 'linear-gradient(90deg, #0B3D6E, #0D9488, #0B3D6E)',
            opacity: 0.22,
            zIndex: 0,
            transform: 'translateY(0)',
          }} />

          {HOW_IT_WORKS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                position: 'relative', zIndex: 1,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Step circle */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${stepColors[i]}, ${i % 2 === 0 ? '#0D9488' : '#0B3D6E'})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.75rem',
                  boxShadow: `0 10px 32px ${stepColors[i]}40`,
                  position: 'relative',
                }}
              >
                <span style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 900,
                  fontSize: '1.6rem', color: 'white',
                }}>
                  {i + 1}
                </span>
                {/* Pulse ring */}
                <div style={{
                  position: 'absolute', inset: '-6px',
                  borderRadius: '50%',
                  border: `2px solid ${stepColors[i]}`,
                  opacity: 0.25,
                }} />
              </motion.div>

              {/* Content */}
              <div style={{
                background: 'white', borderRadius: '18px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 4px 20px rgba(11,61,110,0.08)',
                width: '100%',
              }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(13,148,136,0.08)',
                  color: '#0D9488',
                  padding: '3px 10px', borderRadius: '99px',
                  fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}>
                  {item.step}
                </span>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                  fontSize: '1.05rem', color: '#0B3D6E',
                  marginBottom: '0.5rem',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.83rem', color: '#64748B', lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .how-connector { display: none !important; }
          .how-it-works-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .how-connector { display: none !important; }
          .how-it-works-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}

export default HowItWorks
