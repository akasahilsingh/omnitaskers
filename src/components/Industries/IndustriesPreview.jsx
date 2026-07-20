import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../Common/SectionTitle'
import { INDUSTRIES } from '../../lib/mockData'

export function IndustriesPreview() {
  return (
    <section style={{ background: '#F8FAFC', padding: '6rem 0' }}>
      <div className="container-inner">
        <SectionTitle
          badge="Industries We Serve"
          title="Supporting Businesses Across Industries"
          subtitle="Integrated workforce, operational and business support solutions across diverse industries"
          style={{ marginBottom: '4rem' }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.25rem',
          marginTop: '3rem',
        }}>
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -5 }}
              style={{
                background: 'white', borderRadius: '22px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(11,61,110,0.07)',
                border: '1px solid rgba(0,0,0,0.05)',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 20px 50px ${industry.color.bg.replace('0.10', '0.25')}`
                e.currentTarget.style.borderColor = industry.color.accent
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(11,61,110,0.07)'
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
              }}
            >
              {/* Top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: `linear-gradient(90deg, ${industry.color.accent}, #0D9488)`,
              }} />
              <div style={{
                width: '56px', height: '56px', borderRadius: '16px',
                background: industry.color.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px', marginBottom: '1.25rem',
              }}>
                {industry.icon}
              </div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                fontSize: '1.1rem', color: '#0B3D6E', marginBottom: '0.6rem',
              }}>
                {industry.name}
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.7 }}>
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tagline + CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{
            fontFamily: 'Outfit, sans-serif', fontWeight: 700,
            fontSize: '1.05rem', color: '#0D9488',
            fontStyle: 'italic', marginBottom: '1.5rem',
          }}>
            One Partner. Multiple Industries. Integrated Solutions.
          </p>
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="/industries"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent',
              color: '#0B3D6E',
              padding: '0.8rem 2rem',
              borderRadius: '14px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700, fontSize: '0.95rem',
              border: '2px solid rgba(11,61,110,0.18)',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#0B3D6E'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.borderColor = '#0B3D6E'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#0B3D6E'
              e.currentTarget.style.borderColor = 'rgba(11,61,110,0.18)'
            }}
          >
            Explore All Industries
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default IndustriesPreview
