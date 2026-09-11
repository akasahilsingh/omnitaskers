import { motion } from 'framer-motion'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-[#0B3D6E] text-white hover:bg-[#0F5A9E] active:bg-[#071F38]',
    secondary: 'border-2 border-[#0B3D6E] text-[#0B3D6E] hover:bg-slate-50',
    accent: 'bg-[#0D9488] text-white hover:bg-[#14B8A6] active:bg-[#0F766E]',
    ghost: 'text-[#0B3D6E] hover:bg-slate-50',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
