import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { CONTACT, SOCIAL } from '../../lib/constants'

const Facebook = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const Instagram = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const Linkedin = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const Twitter = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact Us', href: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Cleaning Services', href: '/services?category=cleaning-services' },
        { label: 'Property Maintenance', href: '/services?category=property-maintenance' },
        { label: 'Home Assistance', href: '/services?category=home-assistance' },
        { label: 'Vehicle Care', href: '/services?category=vehicle-care' },
        { label: 'Infrastructure Oversight', href: '/services?category=infrastructure-services' },
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '/#faq' },
        { label: 'Privacy Policy', href: '/' },
        { label: 'Terms of Service', href: '/' },
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, url: SOCIAL.facebook, label: 'Facebook' },
    { icon: Instagram, url: SOCIAL.instagram, label: 'Instagram' },
    { icon: Linkedin, url: SOCIAL.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: SOCIAL.twitter, label: 'Twitter' },
  ]

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #071F38 0%, #050F1E 100%)',
      color: 'white',
    }}>
      {/* Top section */}
      <div className="container-inner" style={{ padding: '4rem 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <img
                src="/omnitaskers-logo.svg"
                alt="OmniTaskers Logo"
                style={{
                  width: '44px', height: '44px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1) drop-shadow(0 2px 6px rgba(13,148,136,0.4))',
                  flexShrink: 0,
                }}
              />
              <span style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                fontSize: '20px', color: 'white', letterSpacing: '-0.02em',
              }}>
                Omni<span style={{ color: '#14B8A6' }}>Taskers</span>
              </span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'rgba(186,230,253,0.65)', lineHeight: 1.75, maxWidth: '240px', marginBottom: '1.5rem' }}>
              Your premium, trusted partner for home, maintenance, and vehicle care services serving Omaxe City, Lucknow.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: '38px', height: '38px',
                      background: 'rgba(255,255,255,0.07)',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(186,230,253,0.70)',
                      transition: 'all 0.25s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#0D9488'
                      e.currentTarget.style.color = 'white'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                      e.currentTarget.style.color = 'rgba(186,230,253,0.70)'
                      e.currentTarget.style.transform = 'none'
                    }}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h5 style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                fontSize: '0.75rem', letterSpacing: '0.10em', textTransform: 'uppercase',
                color: '#14B8A6', marginBottom: '1.25rem',
              }}>
                {section.title}
              </h5>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        style={{
                          fontSize: '0.85rem', fontWeight: 500,
                          color: 'rgba(186,230,253,0.60)',
                          textDecoration: 'none', transition: 'color 0.2s ease',
                          display: 'inline-flex', alignItems: 'center', gap: '4px',
                        }}
                        onMouseEnter={e => e.target.style.color = 'white'}
                        onMouseLeave={e => e.target.style.color = 'rgba(186,230,253,0.60)'}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        style={{
                          fontSize: '0.85rem', fontWeight: 500,
                          color: 'rgba(186,230,253,0.60)',
                          textDecoration: 'none', transition: 'color 0.2s ease',
                          display: 'inline-flex', alignItems: 'center', gap: '4px',
                        }}
                        onMouseEnter={e => e.target.style.color = 'white'}
                        onMouseLeave={e => e.target.style.color = 'rgba(186,230,253,0.60)'}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container-inner" style={{ padding: '2rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { Icon: Phone, label: 'Phone Support', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
              { Icon: Mail, label: 'Email Inquiry', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { Icon: MapPin, label: 'Office Location', value: CONTACT.address, href: null },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: 'rgba(13,148,136,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <item.Icon size={16} style={{ color: '#14B8A6' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.65rem', color: 'rgba(148,208,210,0.55)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} style={{
                      fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.85)', textDecoration: 'none', wordBreak: 'break-all',
                      transition: 'color 0.2s ease',
                    }}
                      onMouseEnter={e => e.target.style.color = '#14B8A6'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container-inner" style={{ padding: '1.25rem 1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(186,230,253,0.35)', fontWeight: 500 }}>
            © {currentYear} OmniTaskers Lucknow. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a key={label} href="/" style={{
                fontSize: '0.78rem', color: 'rgba(186,230,253,0.35)', fontWeight: 500,
                textDecoration: 'none', transition: 'color 0.2s ease',
              }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'rgba(186,230,253,0.35)'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
