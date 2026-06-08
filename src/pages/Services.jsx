import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MessageCircle, Phone, Sparkles, Wrench, Users, Car, Building2, HelpCircle, CheckCircle, ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../lib/mockData'
import { CONTACT } from '../lib/constants'

const iconMap = { Sparkles, Wrench, Users, Car, Building2 }

const categoryColors = [
  { bg: 'rgba(13,148,136,0.10)', active: '#0D9488', light: 'rgba(13,148,136,0.08)' },
  { bg: 'rgba(11,61,110,0.10)', active: '#0B3D6E', light: 'rgba(11,61,110,0.06)' },
  { bg: 'rgba(234,88,12,0.09)', active: '#EA580C', light: 'rgba(234,88,12,0.07)' },
  { bg: 'rgba(124,58,237,0.09)', active: '#7C3AED', light: 'rgba(124,58,237,0.07)' },
  { bg: 'rgba(16,163,74,0.09)', active: '#16A34A', light: 'rgba(16,163,74,0.07)' },
]

// Reusable page hero used across all inner pages
function PageHero({ title, subtitle, badge }) {
  return (
    <section style={{
      background: 'linear-gradient(150deg, #071F38 0%, #0B3D6E 50%, #0F4F8C 80%, #0D9488 100%)',
      padding: '5rem 0 4rem',
      position: 'relative',
      overflow: 'hidden',
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
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
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
          <p style={{
            fontSize: '1.05rem', color: 'rgba(186, 230, 253, 0.82)', lineHeight: 1.75,
          }}>
            {subtitle}
          </p>
        </motion.div>
      </div>
      {/* Wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" fill="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0 48L360 28C720 8 1080 8 1440 28V48H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'cleaning-services'
  const currentCategory = SERVICES.find(c => c.id === activeCategory) || SERVICES[0]

  const handleWhatsApp = (name) => {
    const msg = `Hi OmniTaskers! I am interested in booking or getting a quote for the "${name}" service in Omaxe City, Lucknow.`
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        badge="All Services"
        title="Our Premium Services"
        subtitle="Explore our range of home, maintenance, and vehicle care services tailored specifically for Omaxe City, Lucknow."
      />

      {/* Category selector — floats up from wave */}
      <div className="container-inner" style={{ marginTop: '-1rem', paddingBottom: '2rem', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
        }}>
          {SERVICES.map((cat, i) => {
            const Icon = iconMap[cat.icon] || HelpCircle
            const isActive = cat.id === activeCategory
            const color = categoryColors[i % categoryColors.length]
            return (
              <motion.button
                key={cat.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSearchParams({ category: cat.id })}
                style={{
                  background: isActive
                    ? 'white'
                    : 'white',
                  borderRadius: '18px',
                  padding: '1.25rem 1rem',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'flex-start', gap: '0.75rem',
                  textAlign: 'left', cursor: 'pointer',
                  boxShadow: isActive
                    ? `0 8px 32px ${color.bg.replace('0.10', '0.30')}, 0 2px 8px rgba(0,0,0,0.06)`
                    : '0 2px 10px rgba(0,0,0,0.05)',
                  border: `2px solid ${isActive ? color.active : 'transparent'}`,
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{
                  width: '42px', height: '42px', borderRadius: '12px',
                  background: isActive ? color.bg.replace('0.10', '0.15') : color.light,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon style={{ width: '20px', height: '20px', color: color.active }} />
                </div>
                <div>
                  <p style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                    fontSize: '0.88rem', color: isActive ? color.active : '#0F172A',
                    lineHeight: 1.3,
                  }}>
                    {cat.name}
                  </p>
                  <p style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600, marginTop: '3px' }}>
                    {cat.services.length} services
                  </p>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Active category detail */}
      <div className="container-inner" style={{ paddingBottom: '5rem' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32 }}
          >
            {/* Header card */}
            <div style={{
              background: 'white', borderRadius: '24px',
              padding: '2.5rem', marginBottom: '1.5rem',
              boxShadow: '0 4px 24px rgba(11,61,110,0.08)',
              display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
              alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ flex: '1 1 300px' }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(13,148,136,0.08)', color: '#0D9488',
                  padding: '4px 12px', borderRadius: '99px',
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem',
                }}>
                  Category Overview
                </span>
                <h2 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#0B3D6E',
                  marginBottom: '0.5rem',
                }}>
                  {currentCategory.name}
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.7, maxWidth: '520px' }}>
                  {currentCategory.description}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', flexShrink: 0 }}>
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => window.location.href = `/contact?service=${currentCategory.id}`}
                  style={{
                    background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                    color: 'white', padding: '0.7rem 1.5rem',
                    borderRadius: '12px', fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700, fontSize: '0.88rem',
                    display: 'flex', alignItems: 'center', gap: '6px',
                    boxShadow: '0 6px 20px rgba(13,148,136,0.30)',
                    cursor: 'pointer',
                  }}
                >
                  Request Quote
                  <ArrowRight size={15} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleWhatsApp(currentCategory.name)}
                  style={{
                    background: 'rgba(37,211,102,0.08)', color: '#16A34A',
                    padding: '0.7rem 1.5rem', borderRadius: '12px',
                    fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.88rem',
                    display: 'flex', alignItems: 'center', gap: '6px',
                    border: '1.5px solid rgba(37,211,102,0.25)', cursor: 'pointer',
                  }}
                >
                  <MessageCircle size={15} /> WhatsApp
                </motion.button>
              </div>
            </div>

            {/* Sub-services grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem', marginBottom: '1.5rem',
            }}>
              {currentCategory.services.map((sub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.07 }}
                  style={{
                    background: 'white', borderRadius: '18px',
                    padding: '1.75rem',
                    boxShadow: '0 2px 12px rgba(11,61,110,0.06)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    border: '1px solid rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease',
                  }}
                  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(11,61,110,0.12)' }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                      <div style={{
                        width: '30px', height: '30px', borderRadius: '8px',
                        background: 'rgba(13,148,136,0.10)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <CheckCircle size={16} style={{ color: '#0D9488' }} />
                      </div>
                      <h4 style={{
                        fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                        fontSize: '1rem', color: '#0B3D6E',
                      }}>
                        {sub.name}
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.65 }}>
                      {sub.description}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    marginTop: '1.25rem', paddingTop: '1rem',
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                  }}>
                    <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600 }}>Premium Care</span>
                    <button
                      onClick={() => handleWhatsApp(`${currentCategory.name} — ${sub.name}`)}
                      style={{
                        background: 'none', cursor: 'pointer',
                        color: '#0D9488', fontSize: '0.78rem', fontWeight: 700,
                        display: 'flex', alignItems: 'center', gap: '4px',
                        fontFamily: 'Outfit, sans-serif',
                      }}
                    >
                      Inquire <ArrowUpRight size={13} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <div style={{
              background: 'linear-gradient(135deg, #071F38 0%, #0B3D6E 50%, #0D9488 100%)',
              borderRadius: '22px', padding: '2.5rem',
              display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
              alignItems: 'center', justifyContent: 'space-between',
              boxShadow: '0 12px 40px rgba(11,61,110,0.25)',
            }}>
              <div>
                <h4 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                  fontSize: '1.2rem', color: 'white', marginBottom: '0.4rem',
                }}>
                  Have a custom service request?
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(186,230,253,0.75)', lineHeight: 1.6 }}>
                  If you need services not listed here, our Omaxe City team will try to accommodate you.
                </p>
              </div>
              <a
                href={`tel:${CONTACT.phone}`}
                style={{
                  background: 'white', color: '#0B3D6E',
                  padding: '0.75rem 1.75rem', borderRadius: '14px',
                  fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  textDecoration: 'none', flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.20)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#F0FDF4'}
                onMouseLeave={e => e.currentTarget.style.background = 'white'}
              >
                <Phone size={16} style={{ color: '#0D9488' }} /> Call Direct
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
