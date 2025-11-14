import { useEffect, useRef } from 'react'
import './LogoExplainer.css'

function LogoExplainer() {
  const sectionRef = useRef(null)
  const iconRef = useRef(null)
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
      { threshold: 0.2 }
    )

    if (iconRef.current) observer.observe(iconRef.current)
    if (textRef.current) observer.observe(textRef.current)

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="logo-explainer" className="logo-explainer">
      <div className="logo-explainer-container" ref={sectionRef}>
        <div className="logo-explainer-icon" ref={iconRef}>
          <div className="app-icon-placeholder">
            <div className="app-icon-content">
              <span className="icon-moon">🌙</span>
              <span className="icon-stars">✨</span>
            </div>
          </div>
        </div>
        <div className="logo-explainer-text" ref={textRef}>
          <h2 className="explainer-heading">
            The app that makes sleep healthier, <em>stories richer</em>, and your bond <strong>stronger</strong>.
          </h2>
          <div className="explainer-body">
            <p>You read together, or your recorded voice reads when you can't be there.</p>
            <p>Your child chooses gentle story paths while visuals stay soft and sleep-friendly.</p>
            <p>Yume winds down into calming soundscapes, helping them drift into deeper, healthier sleep.</p>
          </div>
          <div className="explainer-cta">
            <button className="cta-primary" onClick={() => scrollTo('plans')}>
              Get early access
            </button>
            <button className="cta-secondary" onClick={() => scrollTo('features')}>
              See how it works ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoExplainer

