import { useEffect, useRef, useState } from 'react'
import './RestSection.css'

function RestSection() {
  const sectionRef = useRef(null)
  const questionRef = useRef(null)
  const solutionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      // Calculate progress (0 to 1) as section enters and scrolls through viewport
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / sectionHeight))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Question opacity: 0.1 to 0.4 (0 to 1)
  const questionOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.3))
  
  // Solution opacity: 0.4 to 0.8 (0 to 1)
  const solutionOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.4) / 0.4))
  const solutionTranslateY = scrollProgress < 0.4 ? 20 : Math.max(0, 20 - ((scrollProgress - 0.4) / 0.4) * 20)

  return (
    <section id="rest-section" className="rest-section" ref={sectionRef}>
      <div className="rest-background">
        <div className="rest-overlay"></div>
      </div>
      <div className="rest-content">
        <div 
          className="rest-question" 
          ref={questionRef}
          style={{ opacity: questionOpacity }}
        >
          <h1 className="rest-heading">
            What if technology finally learned to <em>rest</em>?
          </h1>
        </div>
        <div 
          className="rest-solution" 
          ref={solutionRef}
          style={{ 
            opacity: solutionOpacity,
            transform: `translateY(${solutionTranslateY}px)`
          }}
        >
          <h3 className="rest-subheading">
            The app that makes sleep healthier, stories richer, and your bond stronger.
          </h3>
          <div className="rest-body">
            <p>You read, or your voice reads for them while they choose what happens next.</p>
            <p>AI paints each scene in soft, low-light illustrations designed for sleepy eyes.</p>
            <p>As their eyes grow heavy, Yume finishes the story with care and settles into a cloud of comforting sleep sounds.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RestSection

