import { useEffect, useRef, useState } from 'react'
import './ProductVideo.css'

function ProductVideo({ onVideoComplete }) {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate progress from 0 to 1, starting when the section top hits the viewport top
      // and ending when the section bottom hits the viewport bottom.
      const scrollAmount = sectionHeight - windowHeight
      if (scrollAmount <= 0) return

      const progress = Math.max(0, Math.min(1, -sectionTop / scrollAmount))
      setScrollProgress(progress)

      // Video scrubbing logic
      if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        // Phase 4: Video scrubs (progress 0.45 to 0.80)
        if (progress >= 0.45 && progress <= 0.80) {
          const scrubProgress = (progress - 0.45) / (0.80 - 0.45)
          const videoDuration = videoRef.current.duration
          const newTime = scrubProgress * videoDuration * 0.514 // Scrub up to 51.4% of video
          videoRef.current.currentTime = newTime
        } else if (progress < 0.45) {
          // Before scrubbing, stay at frame 0
          videoRef.current.currentTime = 0
        } else { // After scrubbing, stay at the end frame
          videoRef.current.currentTime = videoRef.current.duration * 0.514
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [isVideoLoaded])

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  // --- Animation Phases based on Scroll Progress ---

  // Phase 1 & 2: "Introducing" text
  // Stays fully visible until 25% progress, then fades out until 35%
  const introducingOpacity = scrollProgress <= 0.25
    ? 1
    : scrollProgress < 0.35
    ? 1 - ((scrollProgress - 0.25) / 0.1)
    : 0

  // Phase 3, 4, 5: Video
  // Fades in from 35-45%, stays visible until 80%, then fades out until 90%
  const videoOpacity = scrollProgress < 0.35
    ? 0
    : scrollProgress < 0.45
    ? (scrollProgress - 0.35) / 0.1
    : scrollProgress <= 0.80
    ? 1
    : scrollProgress < 0.90
    ? 1 - ((scrollProgress - 0.80) / 0.1)
    : 0

  // Phase 6 & 7: "Yume" text
  // Fades in from 80-90%, then stays visible
  const yumeOpacity = scrollProgress < 0.80
    ? 0
    : scrollProgress < 0.90
    ? (scrollProgress - 0.80) / 0.1
    : 1

  // Trigger completion callback when Yume text appears
  useEffect(() => {
    if (yumeOpacity > 0.5 && onVideoComplete) {
      onVideoComplete(true)
    }
  }, [yumeOpacity, onVideoComplete])

  // Calculate background color - transition from dark to white when Yume appears
  const backgroundColor = yumeOpacity > 0 
    ? '#ffffff' 
    : 'var(--bg-dark)'

  return (
    <section 
      id="product-video" 
      className="product-video" 
      ref={sectionRef}
      style={{ background: backgroundColor }}
    >
      <div className="product-video-wrapper">
        <div className="video-container">
          {/* "Introducing" text */}
          <div 
            className="introducing-text"
            style={{ opacity: introducingOpacity }}
          >
            Introducing
          </div>

          {/* Video */}
          <video
            ref={videoRef}
            className="product-video-element"
            style={{ opacity: videoOpacity }}
            muted
            playsInline
            onLoadedMetadata={handleVideoLoaded}
            preload="metadata"
          >
            <source src="/assets/yume-tablet-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* "Yume" text */}
          <div 
            className="yume-text"
            style={{ opacity: yumeOpacity }}
          >
            Yume
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductVideo

