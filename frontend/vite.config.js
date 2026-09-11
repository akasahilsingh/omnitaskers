import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 8 uses rolldown which requires manualChunks as a function
function manualChunks(id) {
  if (id.includes('node_modules/framer-motion')) return 'vendor-framer'
  if (id.includes('node_modules/lucide-react'))  return 'vendor-icons'
  if (
    id.includes('node_modules/react/') ||
    id.includes('node_modules/react-dom/') ||
    id.includes('node_modules/react-router-dom/') ||
    id.includes('node_modules/react-router/')
  ) return 'vendor-react'
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
    cssCodeSplit: true,
    // Vite 8 uses oxc for minification by default (esbuild no longer bundled)
    target: ['es2020', 'chrome90', 'firefox90', 'safari14'],
  },
})
