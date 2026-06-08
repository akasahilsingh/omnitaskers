import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../Common/Button'

export function MobileMenu({ onClose }) {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="md:hidden bg-white border-t border-[#E7E5E4] shadow-lg"
    >
      <div className="px-4 py-4 space-y-3">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className="block px-4 py-3 text-[#57534E] hover:bg-[#F5F5F4] rounded-lg font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Button
          variant="primary"
          size="md"
          className="w-full"
          onClick={() => {
            onClose()
            window.location.href = '/contact'
          }}
        >
          Get Free Quote
        </Button>
      </div>
    </motion.div>
  )
}

export default MobileMenu
