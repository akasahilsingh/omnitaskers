import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT } from '../../lib/constants'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: scrolled
            ? 'rgba(255,255,255,0.92)'
            : 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: scrolled ? '0 4px 24px rgba(11,61,110,0.10)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(11,61,110,0.07)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container-inner">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <div style={{
                width: '42px', height: '42px',
                background: 'linear-gradient(135deg, #0B3D6E 0%, #0D9488 100%)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(13,148,136,0.30)',
                flexShrink: 0,
              }}>
                <span style={{ color: 'white', fontWeight: 900, fontSize: '16px', fontFamily: 'Outfit, sans-serif' }}>OT</span>
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '20px', color: '#0B3D6E', letterSpacing: '-0.02em' }}>
                Omni<span style={{ color: '#0D9488' }}>Taskers</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="nav-desktop">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: isActive ? '#0D9488' : '#334155',
                      textDecoration: 'none',
                      position: 'relative',
                      padding: '4px 0',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => { if (!isActive) e.target.style.color = '#0B3D6E' }}
                    onMouseLeave={e => { if (!isActive) e.target.style.color = '#334155' }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        style={{
                          position: 'absolute', bottom: '-2px', left: 0, right: 0,
                          height: '2px',
                          background: 'linear-gradient(90deg, #0D9488, #14B8A6)',
                          borderRadius: '99px',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* CTA Buttons - Desktop */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="nav-desktop">
              <a
                href={`tel:${CONTACT.phone}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.85rem',
                  color: '#0B3D6E', textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(11,61,110,0.06)',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(11,61,110,0.11)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(11,61,110,0.06)'}
              >
                <Phone size={15} />
                {CONTACT.phone}
              </a>
              <Link to="/contact" className="btn btn-teal btn-sm">
                Get Free Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="nav-mobile"
              style={{
                background: 'none', padding: '8px',
                borderRadius: '10px', color: '#0B3D6E',
                transition: 'background 0.2s ease',
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed', top: '72px', left: 0, right: 0,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 20px 60px rgba(11,61,110,0.12)',
              zIndex: 99,
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.25rem' }}>
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.85rem 1.1rem',
                        borderRadius: '12px',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 600, fontSize: '1rem',
                        color: isActive ? '#0D9488' : '#0F172A',
                        background: isActive ? 'rgba(13,148,136,0.08)' : 'transparent',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href={`tel:${CONTACT.phone}`} className="btn btn-outline" style={{ justifyContent: 'center' }}>
                <Phone size={16} /> {CONTACT.phone}
              </a>
              <Link to="/contact" className="btn btn-teal" onClick={() => setIsOpen(false)} style={{ justifyContent: 'center' }}>
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar
