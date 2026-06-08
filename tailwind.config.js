/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B3D6E',
        'primary-dark': '#071F38',
        'primary-light': '#0F5A9E',
        accent: '#0D9488',
        'accent-light': '#14B8A6',
        'accent-dark': '#0F766E',
        background: '#FFFFFF',
        foreground: '#0F172A',
        'muted-bg': '#F8FAFC',
        'muted-fg': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: 'transparent',
      },
    },
  },
  plugins: [],
}
