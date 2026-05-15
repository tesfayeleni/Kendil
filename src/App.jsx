import { useEffect } from 'react'
import businessInfo from './data/businessInfo'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import WhyUs        from './components/WhyUs'
import Services     from './components/Services'
import Gallery      from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = businessInfo.name + ' · Production & Events'
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'var(--black)' }}>
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
