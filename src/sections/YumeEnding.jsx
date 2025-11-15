import { useEffect, useRef } from 'react'
import './YumeEnding.css'

function YumeEnding() {
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
    <section id="yume-ending" className="yume-ending">
      <div className="yume-ending-container">
        <div className="yume-ending-image" ref={imageRef}>
          <img 
            src="/assets/yume-ending.jpg" 
            alt="Yume story ending"
            className="ending-image"
          />
        </div>
        <div className="yume-ending-text" ref={textRef}>
          <h2 className="ending-heading">
            The perfect ending, every time
          </h2>
        </div>
      </div>
    </section>
  )
}

export default YumeEnding

