import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function AnimatedCounter({ value, suffix, prefix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 25)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} style={{
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 900, fontSize: 'clamp(2.25rem, 4vw, 3rem)',
      color: 'white', lineHeight: 1, letterSpacing: '-0.03em',
    }}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const metrics = [
  { id: 1, value: 100, suffix: '%', prefix: '', label: 'Service Quality Commitment', icon: '🏆', isAnimated: true },
  { id: 2, text: '24×7', label: 'Operational Support', icon: '⚡', isAnimated: false },
  { id: 3, text: 'Multi', label: 'Industry Capability', icon: '🏢', isAnimated: false },
  { id: 4, text: 'Scalable', label: 'Workforce Solutions', icon: '📈', isAnimated: false },
]

export function TrustIndicators() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #071F38 0%, #0B3D6E 50%, #0D9488 100%)',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      <div className="container-inner" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.10)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
        }}>
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(10px)',
                padding: '2.5rem 2rem',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '0.5rem',
                textAlign: 'center',
                transition: 'background 0.25s ease',
                cursor: 'default',
              }}
              whileHover={{ background: 'rgba(255,255,255,0.11)' }}
            >
              <span style={{ fontSize: '2.2rem', marginBottom: '0.25rem' }}>{metric.icon}</span>
              {metric.isAnimated ? (
                <AnimatedCounter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              ) : (
                <span style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 900, fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                  color: 'white', lineHeight: 1, letterSpacing: '-0.03em',
                }}>
                  {metric.text}
                </span>
              )}
              <p style={{
                fontSize: '0.82rem', fontWeight: 600,
                color: 'rgba(186, 230, 253, 0.75)',
                letterSpacing: '0.02em', marginTop: '4px',
              }}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Services attribution */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: 'rgba(186,230,253,0.50)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          ✦ Omnitaskers Solution Private Limited ✦
        </motion.p>
      </div>
    </section>
  )
}

export default TrustIndicators
