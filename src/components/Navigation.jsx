import { useState, useEffect, useRef } from 'react'
import './Navigation.css'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [textColor, setTextColor] = useState('white')
  const navRef = useRef(null)

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

  // Section color mapping: which sections need white text vs black text
  const sectionColorMap = {
    'hero-problem': 'white',
    'rest-section': 'white',
    'product-video': 'dynamic', // Special handling needed
    'app-showcase': 'black',
    'features': 'black',
    'plans': 'white',
    'testimonials': 'black',
    'fake-demo': 'white',
    'contact-form': 'black'
  }

  useEffect(() => {
    const updateTextColor = () => {
      if (!navRef.current) return

      const navRect = navRef.current.getBoundingClientRect()
      const headerBottom = navRect.bottom
      
      // Ordered list of sections as they appear on the page
      const sections = [
        'hero-problem',
        'rest-section',
        'product-video',
        'app-showcase',
        'features',
        'plans',
        'testimonials',
        'fake-demo',
        'contact-form'
      ]

      let activeSection = null
      let activeSectionId = null

      // Find which section is currently at the header position
      // Check if header bottom is within a section's bounds
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (!section) continue

        const rect = section.getBoundingClientRect()
        
        // Check if header bottom is within this section's vertical bounds
        if (rect.top <= headerBottom && rect.bottom >= headerBottom) {
          activeSection = section
          activeSectionId = sectionId
          break
        }
      }

      // If header is between sections, use the section whose top has just passed the header
      if (!activeSection) {
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i]
          const section = document.getElementById(sectionId)
          if (!section) continue

          const rect = section.getBoundingClientRect()
          
          // If this section's top has passed the header bottom, use it
          if (rect.top <= headerBottom) {
            activeSection = section
            activeSectionId = sectionId
            break
          }
        }
      }

      // Fallback: if we're at the very top, use first section
      if (!activeSection && window.scrollY < 100) {
        const firstSection = document.getElementById('hero-problem')
        if (firstSection) {
          activeSection = firstSection
          activeSectionId = 'hero-problem'
        }
      }

      // Special handling for product-video section
      if (activeSectionId === 'product-video' && activeSection) {
        const rect = activeSection.getBoundingClientRect()
        const sectionTop = rect.top
        const sectionHeight = rect.height
        const windowHeight = window.innerHeight
        
        // Calculate scroll progress (same logic as ProductVideo component)
        const scrollAmount = sectionHeight - windowHeight
        if (scrollAmount > 0) {
          const progress = Math.max(0, Math.min(1, -sectionTop / scrollAmount))
          
          // Switch to black at 40% progress
          if (progress >= 0.40) {
            setTextColor('black')
            return
          } else {
            setTextColor('white')
            return
          }
        } else {
          // Fallback: if section is visible and near top, check if we're past the midpoint
          if (rect.top < windowHeight * 0.5) {
            setTextColor('black')
            return
          } else {
            setTextColor('white')
            return
          }
        }
      }

      // For all other sections, use the color map
      if (activeSectionId && sectionColorMap[activeSectionId]) {
        const mappedColor = sectionColorMap[activeSectionId]
        if (mappedColor !== 'dynamic') {
          setTextColor(mappedColor)
        }
      } else {
        // Default to white if we can't determine
        setTextColor('white')
      }
    }

    // Check on scroll and resize
    window.addEventListener('scroll', updateTextColor, { passive: true })
    window.addEventListener('resize', updateTextColor)
    
    // Initial check
    updateTextColor()

    return () => {
      window.removeEventListener('scroll', updateTextColor)
      window.removeEventListener('resize', updateTextColor)
    }
  }, [])

  return (
    <nav className={`navigation visible ${textColor === 'black' ? 'text-dark' : 'text-light'}`} ref={navRef}>
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

