import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, Clock } from 'lucide-react'
import { CONTACT } from '../../lib/constants'

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1.1rem',
  borderRadius: '12px',
  border: '1.5px solid rgba(0,0,0,0.10)',
  background: '#F8FAFC',
  fontSize: '0.9rem',
  color: '#0F172A',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  transition: 'all 0.2s ease',
  display: 'block',
}

function FormInput({ label, required, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label style={{
        display: 'block', fontSize: '0.82rem', fontWeight: 700,
        color: '#0B3D6E', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif',
      }}>
        {label} {required && <span style={{ color: '#EF4444' }}>*</span>}
      </label>
      {props.as === 'textarea' ? (
        <textarea
          {...props}
          as={undefined}
          onFocus={e => { setFocused(true); props.onFocus && props.onFocus(e) }}
          onBlur={e => { setFocused(false); props.onBlur && props.onBlur(e) }}
          style={{
            ...inputStyle,
            resize: 'none',
            border: `1.5px solid ${focused ? '#0D9488' : 'rgba(0,0,0,0.10)'}`,
            boxShadow: focused ? '0 0 0 4px rgba(13,148,136,0.10)' : 'none',
            background: focused ? 'white' : '#F8FAFC',
          }}
        />
      ) : props.as === 'select' ? (
        <select
          {...props}
          as={undefined}
          onFocus={e => { setFocused(true); props.onFocus && props.onFocus(e) }}
          onBlur={e => { setFocused(false); props.onBlur && props.onBlur(e) }}
          style={{
            ...inputStyle,
            border: `1.5px solid ${focused ? '#0D9488' : 'rgba(0,0,0,0.10)'}`,
            boxShadow: focused ? '0 0 0 4px rgba(13,148,136,0.10)' : 'none',
            background: focused ? 'white' : '#F8FAFC',
            cursor: 'pointer',
          }}
        >
          {props.children}
        </select>
      ) : (
        <input
          {...props}
          onFocus={e => { setFocused(true); props.onFocus && props.onFocus(e) }}
          onBlur={e => { setFocused(false); props.onBlur && props.onBlur(e) }}
          style={{
            ...inputStyle,
            border: `1.5px solid ${focused ? '#0D9488' : 'rgba(0,0,0,0.10)'}`,
            boxShadow: focused ? '0 0 0 4px rgba(13,148,136,0.10)' : 'none',
            background: focused ? 'white' : '#F8FAFC',
          }}
        />
      )}
    </div>
  )
}

export function ContactForm() {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const sp = searchParams.get('service')
    if (sp) setFormData(prev => ({ ...prev, service: sp }))
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitted(false)
    }, 5000)
  }

  const handleWhatsApp = () => {
    const msg = 'Hi OmniTaskers! I want to inquire about a service in Omaxe City, Lucknow.'
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const contactCards = [
    {
      icon: Phone,
      iconBg: 'linear-gradient(135deg, #0B3D6E, #0F4F8C)',
      label: 'Call Direct',
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
      isButton: false,
    },
    {
      icon: MessageCircle,
      iconBg: 'linear-gradient(135deg, #25D366, #20B858)',
      label: 'WhatsApp Chat',
      value: 'Chat with Coordinator',
      onClick: handleWhatsApp,
      isButton: true,
    },
    {
      icon: Mail,
      iconBg: 'linear-gradient(135deg, #0D9488, #14B8A6)',
      label: 'Email Address',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      isButton: false,
    },
    {
      icon: MapPin,
      iconBg: 'linear-gradient(135deg, #7C3AED, #9333EA)',
      label: 'Service Area',
      value: CONTACT.address,
      href: null, isButton: false,
    },
  ]

  return (
    <section style={{ padding: '5rem 0', background: '#F8FAFC' }}>
      <div className="container-inner">
        {/* Section header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(13,148,136,0.08)',
            color: '#0D9488', padding: '5px 14px', borderRadius: '99px',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', marginBottom: '1rem',
          }}>
            Free Consultation
          </span>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#0B3D6E',
            letterSpacing: '-0.025em', marginBottom: '0.75rem',
          }}>
            Request a Free Quote
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7 }}>
            Tell us about your home care needs and we'll get back with a transparent, custom estimate.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr',
          gap: '2rem', alignItems: 'start',
        }} className="contact-grid">

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-sidebar"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {contactCards.map((card) => (
              <motion.div
                key={card.label}
                whileHover={{ y: -3 }}
                style={{
                  background: 'white', borderRadius: '18px', padding: '1.25rem',
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  boxShadow: '0 2px 12px rgba(11,61,110,0.07)',
                  transition: 'box-shadow 0.25s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(11,61,110,0.12)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(11,61,110,0.07)'}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '13px',
                  background: card.iconBg, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
                }}>
                  <card.icon size={20} style={{ color: 'white' }} />
                </div>
                <div>
                  <p style={{
                    fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700,
                    letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px',
                  }}>
                    {card.label}
                  </p>
                  {card.isButton ? (
                    <button
                      onClick={card.onClick}
                      style={{
                        background: 'none', cursor: 'pointer',
                        color: '#16A34A', fontWeight: 700, fontSize: '0.88rem',
                        fontFamily: 'Outfit, sans-serif', padding: 0,
                      }}
                    >
                      {card.value}
                    </button>
                  ) : card.href ? (
                    <a
                      href={card.href}
                      style={{
                        color: '#0F172A', fontWeight: 600, fontSize: '0.88rem',
                        textDecoration: 'none', wordBreak: 'break-all',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={e => e.target.style.color = '#0D9488'}
                      onMouseLeave={e => e.target.style.color = '#0F172A'}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p style={{ color: '#334155', fontWeight: 600, fontSize: '0.88rem', lineHeight: 1.5 }}>
                      {card.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Business hours */}
            <div style={{
              background: 'white', borderRadius: '18px', padding: '1.5rem',
              boxShadow: '0 2px 12px rgba(11,61,110,0.07)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <Clock size={16} style={{ color: '#0D9488' }} />
                <h4 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                  fontSize: '0.88rem', color: '#0B3D6E',
                }}>
                  Office Hours
                </h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { day: 'Mon – Fri', time: '9 AM – 9 PM' },
                  { day: 'Sat – Sun', time: '9 AM – 8 PM' },
                ].map(h => (
                  <div key={h.day} style={{
                    display: 'flex', justifyContent: 'space-between',
                    paddingBottom: '0.6rem', borderBottom: '1px solid rgba(0,0,0,0.06)',
                  }}>
                    <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 500 }}>{h.day}</span>
                    <span style={{ fontSize: '0.82rem', color: '#0F172A', fontWeight: 700 }}>{h.time}</span>
                  </div>
                ))}
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginTop: '0.75rem', padding: '0.6rem 1rem',
                background: 'rgba(13,148,136,0.08)', borderRadius: '10px',
                justifyContent: 'center',
              }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#16A34A', animation: 'pulse-glow 2s infinite', flexShrink: 0,
                }} />
                <span style={{ fontSize: '0.75rem', color: '#0D9488', fontWeight: 700 }}>
                  Emergency Services: 24/7
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'white', borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 8px 40px rgba(11,61,110,0.10)',
              }}
            >
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                fontSize: '1.4rem', color: '#0B3D6E', marginBottom: '0.25rem',
              }}>
                Service Request Details
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '2rem' }}>
                Fill in your details and we'll get back to you within 2 hours.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }} className="form-two-col">
                <FormInput label="Full Name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                <FormInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="yourname@email.com" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }} className="form-two-col">
                <FormInput label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                <FormInput label="Service Category" name="service" as="select" value={formData.service} onChange={handleChange}>
                  <option value="">Select category</option>
                  <option value="cleaning-services">Cleaning Services</option>
                  <option value="property-maintenance">Property Maintenance</option>
                  <option value="home-assistance">Home Assistance</option>
                  <option value="vehicle-care">Vehicle Care</option>
                  <option value="infrastructure-services">Infrastructure Services</option>
                  <option value="other">Other / Custom Inquiry</option>
                </FormInput>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <FormInput
                  label="Describe Your Requirements"
                  name="message"
                  as="textarea"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your maintenance or service need (e.g. leaking sink, AC installation, deep villa cleaning…)"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: '100%',
                  background: submitted
                    ? 'linear-gradient(135deg, #16A34A, #22C55E)'
                    : 'linear-gradient(135deg, #0D9488, #14B8A6)',
                  color: 'white',
                  padding: '0.95rem 2rem',
                  borderRadius: '14px',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700, fontSize: '1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  cursor: 'pointer',
                  boxShadow: submitted
                    ? '0 8px 28px rgba(22,163,74,0.35)'
                    : '0 8px 28px rgba(13,148,136,0.35)',
                  transition: 'all 0.3s ease',
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Quote Request Sent! We'll contact you shortly.
                  </>
                ) : (
                  'Submit Request →'
                )}
              </motion.button>

              <p style={{ fontSize: '0.75rem', color: '#94A3B8', textAlign: 'center', marginTop: '1rem' }}>
                🔒 Your information is secure and will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 901px) {
          .contact-sidebar {
            position: sticky;
            top: 96px;
          }
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-sidebar { position: static !important; }
        }
        @media (max-width: 640px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default ContactForm
