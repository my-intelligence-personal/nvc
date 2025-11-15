import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroProblem from './sections/HeroProblem'
import RestSection from './sections/RestSection'
import ProductVideo from './sections/ProductVideo'
import AppShowcase from './sections/AppShowcase'
import Features from './sections/Features'
import Plans from './sections/Plans'
import Testimonials from './sections/Testimonials'
import FakeDemo from './sections/FakeDemo'
import ContactForm from './sections/ContactForm'
import Footer from './components/Footer'
import './App.css'
import './components/Navigation.css'

function App() {
  const [videoComplete, setVideoComplete] = useState(false)

  return (
    <div className="app">
      <Navigation />
      <div id="hero-problem" className="section-container"><HeroProblem /></div>
      <div id="rest-section-container" className="section-container"><RestSection /></div>
      <div id="product-video" className="section-container"><ProductVideo onVideoComplete={setVideoComplete} /></div>
      <div className="section-container"><AppShowcase /></div>
      <div className="section-container"><Features /></div>
      <div className="section-container"><Plans /></div>
      <div className="section-container"><Testimonials /></div>
      <div className="section-container"><FakeDemo /></div>
      <div className="section-container"><ContactForm /></div>
      <div className="section-container"><Footer /></div>
    </div>
  )
}

export default App


