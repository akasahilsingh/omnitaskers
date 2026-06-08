import { motion } from 'framer-motion'
import { MapPin, ShieldCheck, Navigation } from 'lucide-react'
import ContactForm from '../components/Contact/ContactForm'

function PageHero({ title, subtitle, badge }) {
  return (
    <section style={{
      background: 'linear-gradient(150deg, #071F38 0%, #0B3D6E 50%, #0F4F8C 80%, #0D9488 100%)',
      padding: '5rem 0 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <motion.div
        className="hero-orb"
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
          <path d="M0 48L360 28C720 8 1080 8 1440 28V48H0Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}

const mapPins = [
  { name: 'Sector 1 Villas', x: '25%', y: '35%', desc: 'Premium Villa deep cleaning & electrical audits' },
  { name: 'Sector 2 Residency', x: '65%', y: '25%', desc: 'Daily home assistance & routine plumbing care' },
  { name: 'Sector 3 Apartments', x: '45%', y: '65%', desc: 'AC filter maintenance & doorstep vehicle detailing' },
  { name: 'Sector 4 Enclave', x: '75%', y: '75%', desc: 'Infrastructure monitoring & landscape management' },
  { name: 'Omaxe City Club Road', x: '35%', y: '50%', desc: 'OmniTaskers Lucknow Coordination Office' },
]

function Contact() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        badge="Get In Touch"
        title="Contact OmniTaskers"
        subtitle="Have a task for us? Request a custom quote, inquire about pricing, or talk to our coordinator in Omaxe City, Lucknow."
      />

      {/* Form section */}
      <ContactForm />

      {/* Service area map */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block', background: 'rgba(13,148,136,0.08)',
              color: '#0D9488', padding: '5px 14px', borderRadius: '99px',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              Service Coverage
            </span>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#0B3D6E',
              letterSpacing: '-0.025em', marginBottom: '0.75rem',
            }}>
              Omaxe City Service Map
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
              We exclusively serve the residential phases of Omaxe City Lucknow to ensure rapid response, zero travel fees, and strict quality coordination.
            </p>
          </div>

          {/* Map container */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: '#0F172A',
              borderRadius: '28px', overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
              position: 'relative', minHeight: '480px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '3rem',
            }}
          >
            {/* Grid bg */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(30,41,59,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.8) 1px, transparent 1px)',
              backgroundSize: '32px 32px', opacity: 0.6,
            }} />

            {/* SVG road lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.25 }}>
              <path d="M-100,200 C300,100 400,400 1200,250" stroke="#14B8A6" strokeWidth="2" strokeDasharray="5 5" fill="none" />
              <path d="M200,-100 C150,300 500,200 600,600" stroke="#14B8A6" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <circle cx="50%" cy="50%" r="200" stroke="#14B8A6" strokeWidth="1" fill="none" />
              <circle cx="50%" cy="50%" r="300" stroke="#0D9488" strokeWidth="0.5" fill="none" />
            </svg>

            {/* Map pins */}
            {mapPins.map((pin, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: pin.x, top: pin.y,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
                className="map-pin-group"
              >
                <span style={{
                  position: 'absolute',
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: 'rgba(20,184,166,0.75)',
                  left: '-4px', top: '-4px',
                  animation: 'pulse-glow 2s infinite',
                }} />
                <div style={{
                  width: '16px', height: '16px', background: '#14B8A6',
                  borderRadius: '50%', border: '2px solid white',
                  boxShadow: '0 4px 12px rgba(13,148,136,0.50)',
                  position: 'relative', zIndex: 2, cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }} />
                {/* Tooltip */}
                <div style={{
                  position: 'absolute', bottom: '26px', left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(2,6,23,0.95)',
                  border: '1px solid rgba(20,184,166,0.25)',
                  borderRadius: '12px', padding: '10px 14px',
                  width: '200px', textAlign: 'left',
                  opacity: 0, transition: 'opacity 0.2s ease',
                  pointerEvents: 'none', zIndex: 30,
                }} className="pin-tooltip">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <MapPin size={11} style={{ color: '#14B8A6', flexShrink: 0 }} />
                    <span style={{ color: '#14B8A6', fontWeight: 700, fontSize: '0.72rem', fontFamily: 'Outfit, sans-serif' }}>
                      {pin.name}
                    </span>
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '0.68rem', lineHeight: 1.5 }}>{pin.desc}</p>
                </div>
              </div>
            ))}

            {/* Central overlay card */}
            <div style={{
              position: 'relative', zIndex: 20,
              background: 'rgba(2,6,23,0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(20,184,166,0.20)',
              borderRadius: '20px', padding: '2rem',
              maxWidth: '340px', textAlign: 'left',
              boxShadow: '0 24px 60px rgba(0,0,0,0.40)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <ShieldCheck size={18} style={{ color: '#14B8A6' }} />
                <span style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                  fontSize: '0.75rem', color: '#14B8A6',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>
                  Active Coverage
                </span>
              </div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                fontSize: '1.4rem', color: 'white', marginBottom: '0.6rem',
              }}>
                Lucknow Hub
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Our operations team is stationed in Lucknow, serving Omaxe City residents with response times under 45 minutes for emergency calls.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Navigation size={13} style={{ color: '#14B8A6', flexShrink: 0 }} />
                <span style={{ color: '#CBD5E1', fontSize: '0.8rem', fontWeight: 600 }}>
                  Omaxe City, Lucknow, UP 226025
                </span>
              </div>

              {/* Coverage dots */}
              <div style={{
                display: 'flex', gap: '8px', marginTop: '1.25rem',
                padding: '0.75rem 1rem',
                background: 'rgba(20,184,166,0.08)',
                borderRadius: '12px',
                alignItems: 'center',
              }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#14B8A6', flexShrink: 0,
                  animation: 'pulse-glow 2s infinite',
                }} />
                <span style={{ color: '#14B8A6', fontSize: '0.75rem', fontWeight: 700 }}>
                  5 Active Service Zones · All Sectors Covered
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .map-pin-group:hover .pin-tooltip {
          opacity: 1 !important;
        }
        .map-pin-group:hover > div {
          transform: scale(1.3);
        }
      `}</style>
    </div>
  )
}

export default Contact
