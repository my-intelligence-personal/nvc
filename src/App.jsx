import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroProblem from './sections/HeroProblem'
import RestSection from './sections/RestSection'
import ProductVideo from './sections/ProductVideo'
import YumeOptions from './sections/YumeOptions'
import YumeStory from './sections/YumeStory'
import YumeEnding from './sections/YumeEnding'
import Features from './sections/Features'
import Plans from './sections/Plans'
import Testimonials from './sections/Testimonials'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showNav, setShowNav] = useState(false)
  const [videoComplete, setVideoComplete] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after video completes or when scrolling past YumeEnding
      const yumeEndingEnd = document.getElementById('yume-ending')?.getBoundingClientRect().bottom
      if (yumeEndingEnd && yumeEndingEnd < 100) {
        setShowNav(true)
      } else if (videoComplete) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [videoComplete])

  return (
    <div className="app">
      <Navigation 
        showNav={showNav || videoComplete} 
        logoFixed={videoComplete}
      />
      <HeroProblem />
      <RestSection />
      <ProductVideo onVideoComplete={setVideoComplete} />
      <YumeOptions />
      <YumeStory />
      <YumeEnding />
      <Features />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App

