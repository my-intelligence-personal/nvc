import { useEffect, useRef } from 'react'
import './HeroProblem.css'

function HeroProblem() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero-problem" className="hero-problem" ref={sectionRef}>
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text" ref={textRef}>
          <h1 className="hero-heading">
            What keeps them <em>entertained</em>
            <br />
            keeps them <em>awake</em>.
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HeroProblem

