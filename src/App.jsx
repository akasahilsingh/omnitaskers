import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/Common/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Industries from './pages/Industries'
import Approach from './pages/Approach'
import Careers from './pages/Careers'
import { MessageCircle } from 'lucide-react'
import { CONTACT } from './lib/constants'

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
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
