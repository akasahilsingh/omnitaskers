import { motion } from 'framer-motion'
import SectionTitle from '../Common/SectionTitle'
import { WHY_CHOOSE_US } from '../../lib/mockData'
import * as Icons from 'lucide-react'

const accentColors = [
  { bg: 'rgba(13,148,136,0.10)', color: '#0D9488', glow: 'rgba(13,148,136,0.25)' },
  { bg: 'rgba(11,61,110,0.10)', color: '#0B3D6E', glow: 'rgba(11,61,110,0.20)' },
  { bg: 'rgba(234,88,12,0.09)', color: '#EA580C', glow: 'rgba(234,88,12,0.20)' },
  { bg: 'rgba(124,58,237,0.09)', color: '#7C3AED', glow: 'rgba(124,58,237,0.20)' },
  { bg: 'rgba(22,163,74,0.09)', color: '#16A34A', glow: 'rgba(22,163,74,0.20)' },
  { bg: 'rgba(190,18,60,0.09)', color: '#BE123C', glow: 'rgba(190,18,60,0.20)' },
]

export function WhyChooseCards() {
  return (
    <section style={{ background: 'white', padding: '6rem 0' }}>
      <div className="container-inner">
        <SectionTitle
          badge="Your Reliable Operations Partner"
          title="Why Choose Omnitaskers?"
          subtitle="Reliable, efficient and scalable operational solutions tailored to the evolving needs of modern businesses"
          style={{ marginBottom: '4rem' }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginTop: '3rem',
        }}>
          {WHY_CHOOSE_US.map((item, i) => {
            const IconComponent = Icons[item.icon] || Icons.CheckCircle2
            const accent = accentColors[i % accentColors.length]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  transition: 'box-shadow 0.3s ease, transform 0.25s ease',
                  cursor: 'default',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 20px 50px ${accent.glow}, 0 4px 16px rgba(0,0,0,0.07)`
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  width: '52px', height: '52px',
                  background: accent.bg,
                  borderRadius: '15px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <IconComponent style={{ width: '24px', height: '24px', color: accent.color }} />
                </div>

                <div>
                  <h3 style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                    fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.5rem',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.65 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseCards
