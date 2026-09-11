import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/Common/ScrollToTop'
// Lazy-load all pages — only Home is loaded eagerly
import Home from './pages/Home'
const Services  = lazy(() => import('./pages/Services'))
const About     = lazy(() => import('./pages/About'))
const Contact   = lazy(() => import('./pages/Contact'))
const Industries = lazy(() => import('./pages/Industries'))
const Approach  = lazy(() => import('./pages/Approach'))
const Careers   = lazy(() => import('./pages/Careers'))

import { MessageCircle } from 'lucide-react'
import { CONTACT } from './lib/constants'

// Minimal inline fallback — avoids layout shift while chunk loads
function PageLoader() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Loading page"
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '3px solid rgba(13,148,136,0.20)',
          borderTopColor: '#0D9488',
          borderRadius: '50%',
          animation: 'spin 0.7s linear infinite',
        }}
      />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}

function App() {
  const handleWhatsApp = () => {
    const msg = "Hi Omnitaskers! I'd like to discuss workforce and operational solutions for my business."
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'white' }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"           element={<Home />} />
              <Route path="/services"   element={<Services />} />
              <Route path="/about"      element={<About />} />
              <Route path="/contact"    element={<Contact />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/approach"   element={<Approach />} />
              <Route path="/careers"    element={<Careers />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <button
          onClick={handleWhatsApp}
          aria-label="Chat on WhatsApp"
          className="whatsapp-fab"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={26} color="white" fill="white" />
        </button>
      </div>
    </Router>
  )
}

export default App
