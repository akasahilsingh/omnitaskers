import { useEffect } from 'react'
import HeroSection from '../components/Hero/HeroSection'
import TrustIndicators from '../components/Trust/TrustIndicators'
import ServiceCategories from '../components/Services/ServiceCategories'
import WhyChooseCards from '../components/WhyChoose/WhyChooseCards'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import FeaturedServices from '../components/Services/FeaturedServices'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import ContactCTA from '../components/Contact/ContactCTA'

function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const el = document.getElementById(id)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [])

  return (
    <div>
      <HeroSection />
      <TrustIndicators />
      <ServiceCategories />
      <WhyChooseCards />
      <HowItWorks />
      <FeaturedServices />
      <Testimonials />
      <div id="faq">
        <FAQ />
      </div>
      <ContactCTA />
    </div>
  )
}

export default Home
