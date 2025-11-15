import { useEffect, useRef } from 'react'
import './YumeOptions.css'

function YumeOptions() {
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
    <section id="yume-options" className="yume-options">
      <div className="yume-options-container">
        <div className="yume-options-image" ref={imageRef}>
          <img 
            src="/assets/yume-options.jpg" 
            alt="Yume app options and features"
            className="options-image"
          />
        </div>
        <div className="yume-options-text" ref={textRef}>
          <h2 className="options-heading">
            Choose your adventure together
          </h2>
        </div>
      </div>
    </section>
  )
}

export default YumeOptions

