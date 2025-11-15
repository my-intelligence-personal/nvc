import { useState } from 'react'
import './Navigation.css'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const handleDemoClick = () => {
    // Scroll to demo section
    scrollTo('fake-demo')
  }

  return (
    <nav className="navigation visible">
      <div className="nav-container">
        <div className="nav-logo logo-ready" onClick={() => scrollTo('hero-problem')}>
          <span className="logo-text">YUME</span>
        </div>
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollTo('features')} className="nav-link">FEATURES</button>
          <button onClick={() => scrollTo('plans')} className="nav-link">SUBSCRIPTION PLANS</button>
          <button onClick={() => scrollTo('testimonials')} className="nav-link">TESTIMONIALS</button>
          <button onClick={handleDemoClick} className="nav-link">DEMO</button>
          <button onClick={() => scrollTo('waitlist')} className="nav-link cta">JOIN</button>
        </div>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation

