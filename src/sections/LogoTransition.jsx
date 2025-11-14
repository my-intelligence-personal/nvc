import { useEffect, useRef, useState } from 'react'
import './LogoTransition.css'

function LogoTransition({ onLogoFixed }) {
  const sectionRef = useRef(null)
  const logoRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !logoRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      // Calculate progress (0 to 1)
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / sectionHeight))
      setScrollProgress(progress)

      // When section is scrolled past, fix the logo
      if (sectionTop < -sectionHeight / 2) {
        if (!isFixed) {
          setIsFixed(true)
          if (onLogoFixed) onLogoFixed(true)
        }
      } else {
        if (isFixed) {
          setIsFixed(false)
          if (onLogoFixed) onLogoFixed(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isFixed, onLogoFixed])

  // Interpolate scale: 1.0 → 0.3
  const scale = 1.0 - (scrollProgress * 0.7)
  
  // Interpolate translateY: 0px → -40vh
  const translateY = -scrollProgress * 40
  
  // Interpolate translateX: 0px → -40vw (tuned for top-left alignment)
  const translateX = -scrollProgress * 40

  return (
    <>
      <section id="logo-transition" className="logo-transition" ref={sectionRef}>
        <div className="logo-transition-container">
          <div
            ref={logoRef}
            className={`logo-transition-logo ${isFixed ? 'fixed' : ''}`}
            style={{
              transform: isFixed 
                ? 'scale(0.3) translate(-40vw, -40vh)' 
                : `scale(${scale}) translate(${translateX}vw, ${translateY}vh)`,
              transition: isFixed ? 'none' : 'transform 0.1s linear',
              opacity: isFixed ? 0 : 1
            }}
          >
            <span className="logo-wordmark">YUME</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogoTransition

