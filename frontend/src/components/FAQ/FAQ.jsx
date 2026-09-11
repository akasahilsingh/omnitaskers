import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionTitle from '../Common/SectionTitle'
import { FAQ as FAQ_DATA } from '../../lib/mockData'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      initial={false}
      style={{
        background: isOpen ? 'rgba(11,61,110,0.03)' : 'white',
        borderRadius: '16px',
        boxShadow: isOpen
          ? '0 8px 32px rgba(11,61,110,0.10)'
          : '0 2px 10px rgba(0,0,0,0.04)',
        transition: 'all 0.25s ease',
        overflow: 'hidden',
        border: `1px solid ${isOpen ? 'rgba(13,148,136,0.20)' : 'rgba(0,0,0,0.05)'}`,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '1.25rem 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
          textAlign: 'left', background: 'none', cursor: 'pointer',
        }}
      >
        <span style={{
          fontFamily: 'Outfit, sans-serif', fontWeight: 700,
          fontSize: '0.97rem',
          color: isOpen ? '#0D9488' : '#0B3D6E',
          lineHeight: 1.45,
          transition: 'color 0.2s ease',
        }}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28 }}
          style={{
            flexShrink: 0,
            width: '32px', height: '32px',
            borderRadius: '50%',
            background: isOpen ? 'rgba(13,148,136,0.12)' : 'rgba(11,61,110,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s ease',
          }}
        >
          <ChevronDown size={18} style={{ color: isOpen ? '#0D9488' : '#0B3D6E' }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div style={{
              padding: '0 1.5rem 1.5rem',
              paddingTop: '0',
              fontSize: '0.88rem', color: '#64748B',
              lineHeight: 1.75,
              borderTop: '1px solid rgba(13,148,136,0.12)',
              paddingTop: '1.1rem',
            }}>
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const [openId, setOpenId] = useState(1)

  return (
    <section style={{ background: 'white', padding: '6rem 0', overflow: 'hidden', isolation: 'isolate' }}>
      <div className="container-inner">
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our integrated operations and workforce solutions"
          style={{ marginBottom: '4rem' }}
        />

        <div style={{ maxWidth: '780px', margin: '3rem auto 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {FAQ_DATA.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
