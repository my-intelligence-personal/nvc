import { useState } from 'react'
import confetti from 'canvas-confetti'
import './Navigation.css'

function Navigation({ onDemoClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const handleDemoClick = () => {
    // Trigger confetti from left side
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 }
    })

    // Trigger confetti from right side
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 }
    })

    // Notify parent to show message
    if (onDemoClick) {
      onDemoClick()
    }
  }

  return (
    <nav className="navigation visible">
      <div className="nav-container">
        <div className="nav-logo logo-ready" onClick={() => scrollTo('hero-problem')}>
          <span className="logo-text">YUME</span>
        </div>
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollTo('rest-section')} className="nav-link">DISCOVER</button>
          <button onClick={() => scrollTo('features')} className="nav-link">FEATURES</button>
          <button onClick={() => scrollTo('plans')} className="nav-link">SUBSCRIPTION PLANS</button>
          <button onClick={() => scrollTo('testimonials')} className="nav-link">TESTIMONIALS</button>
          <button onClick={handleDemoClick} className="nav-link">DEMO</button>
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

