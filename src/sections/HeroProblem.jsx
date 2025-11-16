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
            <span>What keeps them <em>entertained</em></span>
            <br />
            <span>keeps them <em>awake</em>.</span>
          </h1>
          <div className="hero-body">
            <p>What seems like quiet screen time before sleep is quietly reshaping how children rest, think, and grow.</p>
            <p>Blue light delays sleep, overstimulation blocks calm, and the screen has replaced the story that once connected parent and child.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroProblem

