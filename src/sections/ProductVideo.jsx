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
        // Phase 4: Video scrubs (progress 0.25 to 0.55) - narrower range for faster, more sensitive scrubbing
        if (progress >= 0.25 && progress <= 0.55) {
          const scrubProgress = (progress - 0.25) / (0.55 - 0.25)
          const videoDuration = videoRef.current.duration
          const newTime = scrubProgress * videoDuration * 0.514 // Scrub up to 51.4% of video
          videoRef.current.currentTime = newTime
        } else if (progress < 0.25) {
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
  // Stays fully visible until 15% progress, then fades out until 25%
  const introducingOpacity = scrollProgress <= 0.15
    ? 1
    : scrollProgress < 0.25
    ? 1 - ((scrollProgress - 0.15) / 0.1)
    : 0

  // Phase 3, 4, 5: Video
  // Fades in from 20-25%, stays visible until 55%, then fades out until 65%
  const videoOpacity = scrollProgress < 0.20
    ? 0
    : scrollProgress < 0.25
    ? (scrollProgress - 0.20) / 0.05
    : scrollProgress <= 0.55
    ? 1
    : scrollProgress < 0.65
    ? 1 - ((scrollProgress - 0.55) / 0.1)
    : 0

  // Phase 6: Whitescreen gap after video fades out
  // Video fades out by 65%, whitescreen gap from 65-75%
  
  // Phase 7: "YUME" text
  // Fades in from 60-65%, then stays visible
  const yumeOpacity = scrollProgress < 0.60
    ? 0
    : scrollProgress < 0.65
    ? (scrollProgress - 0.60) / 0.05
    : 1

  // Phase 8: "Designing Dreams" typewriter animation
  // Starts typing from 65% scroll progress to 95%
  // This creates a longer scroll range where the viewport appears pinned
  const taglineText = "Designing Dreams"
  const typewriterStart = 0.65
  const typewriterEnd = 0.95
  const typewriterProgress = scrollProgress < typewriterStart
    ? 0
    : scrollProgress >= typewriterEnd
    ? 1
    : (scrollProgress - typewriterStart) / (typewriterEnd - typewriterStart)
  
  const revealedChars = Math.floor(typewriterProgress * taglineText.length)
  const displayedText = taglineText.substring(0, revealedChars)
  const taglineOpacity = typewriterProgress > 0 ? 1 : 0

  // Trigger completion callback when Yume text appears (earlier now)
  useEffect(() => {
    if (yumeOpacity > 0.3 && onVideoComplete) {
      onVideoComplete(true)
    }
  }, [yumeOpacity, onVideoComplete])

  // Calculate background color - transition from dark to white when video fades out
  // Background becomes white at 60% (when YUME starts appearing), stays white
  const backgroundColor = scrollProgress >= 0.60
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

          {/* Logo container: YUME + Designing Dreams */}
          <div className="logo-container" style={{ opacity: yumeOpacity }}>
            <div className="yume-text">
              YUME
              <div 
                className="tagline-text"
                style={{ opacity: taglineOpacity }}
              >
                {displayedText}
                {typewriterProgress < 1 && <span className="typewriter-cursor">|</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductVideo

