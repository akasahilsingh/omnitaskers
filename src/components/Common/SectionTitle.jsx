import { motion } from 'framer-motion'

export function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: 'rgba(13,148,136,0.10)',
          color: '#0D9488',
          padding: '5px 14px', borderRadius: '99px',
          fontSize: '0.7rem', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          {badge}
        </span>
      )}
      <h2 style={{
        fontFamily: 'Outfit, sans-serif', fontWeight: 800,
        fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
        color: light ? 'white' : '#0B3D6E',
        marginBottom: subtitle ? '0.85rem' : 0,
        letterSpacing: '-0.025em', lineHeight: 1.15,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '1.05rem', lineHeight: 1.7,
          color: light ? 'rgba(186, 230, 253, 0.80)' : '#64748B',
          maxWidth: centered ? '580px' : undefined,
          margin: centered ? '0 auto' : undefined,
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle
