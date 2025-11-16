import { useEffect, useRef } from 'react'
import './AppShowcase.css'

function AppShowcase() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
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

    if (imageRef.current) observer.observe(imageRef.current)
    if (textRef.current) observer.observe(textRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="app-showcase" className="app-showcase">
      <div className="app-showcase-container">
        <div className="app-showcase-image" ref={imageRef}>
          <img 
            src="/assets/logo.jpg" 
            alt="Yume app icon showing parent and child reading together"
            className="showcase-logo"
          />
        </div>
        <div className="app-showcase-text" ref={textRef}>
          <h2 className="showcase-heading">
            The app that makes sleep <em>healthier</em>, stories <em>richer</em>,<br />
            and your bond <em>stronger</em>.
          </h2>
          <div className="showcase-body">
            <p>You read while they choose what happens next.</p>
            <p>AI paints each scene in gentle e-ink pictures.</p>
            <p>And as their eyes grow heavy, Yume finishes the story with care and settles into a cloud of comforting sleep sounds.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase

