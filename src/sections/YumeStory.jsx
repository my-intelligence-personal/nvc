import { useEffect, useRef } from 'react'
import './YumeStory.css'

function YumeStory() {
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
    <section id="yume-story" className="yume-story">
      <div className="yume-story-container">
        <div className="yume-story-text" ref={textRef}>
          <h2 className="story-heading">
            Stories that come to life
          </h2>
        </div>
        <div className="yume-story-image" ref={imageRef}>
          <img 
            src="/assets/yume-story.jpg" 
            alt="Yume story illustrations"
            className="story-image"
          />
        </div>
      </div>
    </section>
  )
}

export default YumeStory

