import { useEffect, useRef, useState } from 'react'
import './ProductVideo.css'

function ProductVideo({ onVideoComplete }) {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const lockedScrollY = useRef(0)
  const isScrubbing = useRef(false)
  const accumulatedScroll = useRef(0)
  const hasFinishedScrubbing = useRef(false)
  const [showIntroducing, setShowIntroducing] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (!sectionRef.current || !videoRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      // Phase 1: First 100vh - video stays at frame 0 (static)
      // Phase 2: Next 100vh - video scrubs based on scroll
      const staticPhaseHeight = windowHeight // First 100vh is static
      const scrubbingPhaseHeight = sectionHeight - staticPhaseHeight // Remaining height for scrubbing
      
      // Calculate how much we've scrolled past the static phase
      const scrolledPastStatic = Math.max(0, windowHeight - sectionTop - staticPhaseHeight)
      
      // Check if we're in scrubbing phase
      const inScrubbingPhase = scrolledPastStatic > 0 && scrolledPastStatic < scrubbingPhaseHeight
      const scrubProgress = Math.min(1, scrolledPastStatic / scrubbingPhaseHeight)
      const pastScrubbingPhase = scrolledPastStatic >= scrubbingPhaseHeight
      
      // Reset finished flag if we scroll back before the scrubbing phase
      if (scrolledPastStatic <= 0) {
        hasFinishedScrubbing.current = false
      }
      
      if (inScrubbingPhase && !hasFinishedScrubbing.current) {
        // Phase 2: Lock scroll and scrub video (only if not finished)
        if (!isScrubbing.current) {
          isScrubbing.current = true
          lockedScrollY.current = window.scrollY
          accumulatedScroll.current = 0
        }
        
        // Calculate scroll delta
        const scrollDelta = window.scrollY - lockedScrollY.current
        accumulatedScroll.current += scrollDelta
        
        // Convert accumulated scroll to video time
        const videoDuration = videoRef.current.duration
        if (videoDuration && !isNaN(videoDuration)) {
          // Map accumulated scroll to video duration
          // Adjust sensitivity: 100vh of scroll = full video duration
          const scrollRatio = Math.max(0, Math.min(1, accumulatedScroll.current / scrubbingPhaseHeight))
          const newTime = scrollRatio * videoDuration
          videoRef.current.currentTime = newTime
          
          // Show "INTRODUCING" text at 80% scroll progress
          setShowIntroducing(scrollRatio >= 0.8)
          
          // If video reached the end, mark as finished and unlock scroll
          if (scrollRatio >= 1) {
            hasFinishedScrubbing.current = true
            isScrubbing.current = false
            accumulatedScroll.current = scrubbingPhaseHeight // Keep at max to prevent reset
            // Show header immediately
            if (onVideoComplete) {
              onVideoComplete(true)
            }
          }
        }
        
        // Lock scroll position (only if still scrubbing)
        if (isScrubbing.current && Math.abs(window.scrollY - lockedScrollY.current) > 1) {
          window.scrollTo(0, lockedScrollY.current)
        }
      } else {
        // Phase 1, past scrubbing, or finished scrubbing: Normal scroll
        if (isScrubbing.current) {
          isScrubbing.current = false
        }
        
        if (scrolledPastStatic <= 0) {
          // Phase 1: Keep video at frame 0
          if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration)) {
            videoRef.current.currentTime = 0
          }
          setShowIntroducing(false)
        } else if (pastScrubbingPhase || hasFinishedScrubbing.current) {
          // Video finished scrubbing or past scrubbing phase, ensure it's at the end
          if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration)) {
            videoRef.current.currentTime = videoRef.current.duration
          }
          setShowIntroducing(true) // Keep showing if finished
          // Show header if video finished
          if (hasFinishedScrubbing.current && onVideoComplete) {
            onVideoComplete(true)
          }
        }
      }
      
      lastScrollY = window.scrollY
    }

    const handleWheel = (e) => {
      if (!isScrubbing.current || !videoRef.current || !sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const staticPhaseHeight = windowHeight
      const scrubbingPhaseHeight = sectionHeight - staticPhaseHeight
      
      // Check if we're in scrubbing phase and haven't finished
      const scrolledPastStatic = Math.max(0, windowHeight - sectionTop - staticPhaseHeight)
      if (scrolledPastStatic > 0 && scrolledPastStatic < scrubbingPhaseHeight && !hasFinishedScrubbing.current) {
        e.preventDefault()
        e.stopPropagation()
        
        // Convert wheel delta to accumulated scroll
        accumulatedScroll.current += e.deltaY
        
        // Convert accumulated scroll to video time
        const videoDuration = videoRef.current.duration
        if (videoDuration && !isNaN(videoDuration)) {
          const scrollRatio = Math.max(0, Math.min(1, accumulatedScroll.current / scrubbingPhaseHeight))
          const newTime = scrollRatio * videoDuration
          videoRef.current.currentTime = newTime
          
          // Show "INTRODUCING" text at 80% scroll progress
          setShowIntroducing(scrollRatio >= 0.8)
          
          // If video reached the end, mark as finished and unlock scroll
          if (scrollRatio >= 1) {
            hasFinishedScrubbing.current = true
            isScrubbing.current = false
            accumulatedScroll.current = scrubbingPhaseHeight // Keep at max
            // Show header immediately
            if (onVideoComplete) {
              onVideoComplete(true)
            }
            return // Allow normal scroll to continue
          }
        }
        
        // Prevent page scroll while scrubbing
        return false
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: false })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [isVideoLoaded])

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  return (
    <section id="product-video" className="product-video" ref={sectionRef}>
      <div className="product-video-container">
        <div className="product-video-wrapper">
          <div className="video-container">
            {showIntroducing && (
              <div className="introducing-text">
                Introducing
              </div>
            )}
            <video
              ref={videoRef}
              className="product-video-element"
              muted
              playsInline
              onLoadedMetadata={handleVideoLoaded}
              preload="metadata"
            >
              <source src="/assets/yume-tablet-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductVideo

