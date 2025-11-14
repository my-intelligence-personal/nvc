import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroProblem from './sections/HeroProblem'
import RestSection from './sections/RestSection'
import ProductVideo from './sections/ProductVideo'
import LogoTransition from './sections/LogoTransition'
import LogoExplainer from './sections/LogoExplainer'
import Features from './sections/Features'
import Plans from './sections/Plans'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showNav, setShowNav] = useState(false)
  const [logoFixed, setLogoFixed] = useState(false)
  const [videoComplete, setVideoComplete] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after logo transition section completes
      const logoTransitionEnd = document.getElementById('logo-transition')?.getBoundingClientRect().bottom
      if (logoTransitionEnd && logoTransitionEnd < 100) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navigation 
        showNav={showNav || videoComplete} 
        logoFixed={logoFixed || videoComplete}
      />
      <HeroProblem />
      <RestSection />
      <ProductVideo onVideoComplete={setVideoComplete} />
      <LogoTransition onLogoFixed={setLogoFixed} />
      <LogoExplainer />
      <Features />
      <Plans />
      <Footer />
    </div>
  )
}

export default App

