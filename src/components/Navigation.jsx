import { useState } from 'react'
import './Navigation.css'

function Navigation({ showNav, logoFixed }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`navigation ${showNav || logoFixed ? 'visible' : ''}`}>
      <div className="nav-container">
        <div className={`nav-logo ${logoFixed ? 'logo-ready' : ''}`} onClick={() => scrollTo('hero-problem')}>
          <span className="logo-text">YUME</span>
        </div>
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollTo('rest-section')} className="nav-link">discover</button>
          <button onClick={() => scrollTo('features')} className="nav-link">features</button>
          <button onClick={() => scrollTo('plans')} className="nav-link">buy</button>
          <button onClick={() => scrollTo('rest-section')} className="nav-link">stories</button>
          <button onClick={() => scrollTo('product-video')} className="nav-link">demo</button>
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

