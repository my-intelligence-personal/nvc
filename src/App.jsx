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
      <section id="hero-problem"><HeroProblem /></section>
      <section id="rest-section"><RestSection /></section>
      <section id="product-video"><ProductVideo onVideoComplete={setVideoComplete} /></section>
      <section id="app-showcase"><AppShowcase /></section>
      <section id="features"><Features /></section>
      <section id="plans"><Plans /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="fake-demo"><FakeDemo /></section>
      <section id="contact-form"><ContactForm /></section>
      <Footer />
    </div>
  )
}

export default App


