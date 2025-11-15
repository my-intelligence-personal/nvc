import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroProblem from './sections/HeroProblem'
import RestSection from './sections/RestSection'
import ProductVideo from './sections/ProductVideo'
import Features from './sections/Features'
import Plans from './sections/Plans'
import Testimonials from './sections/Testimonials'
import Footer from './components/Footer'
import './App.css'
import './components/Navigation.css'

function App() {
  const [videoComplete, setVideoComplete] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
        return;
      }

      const sections = Array.from(document.querySelectorAll('.section-container'));
      if (sections.length === 0) return;

      // Find the section that is closest to the top of the viewport
      let currentSectionIndex = 0;
      let minDistance = Infinity;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (Math.abs(rect.top) < minDistance) {
          minDistance = Math.abs(rect.top);
          currentSectionIndex = index;
        }
      });
      
      let nextSectionIndex = -1;

      if (event.key === 'ArrowRight') {
        // Find the next section that is below the current one
        const nextSection = sections.find((section, index) => {
          return index > currentSectionIndex && section.getBoundingClientRect().top > 1; // Find next section just past the current one
        });
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        } else if (currentSectionIndex < sections.length - 1) {
          // Fallback for very short sections
          sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
        }
      } else if (event.key === 'ArrowLeft') {
        // Find the previous section by looking for the last one above the viewport
        const sectionsAbove = sections.filter((section) => section.getBoundingClientRect().top < -1); // Find all sections that have passed
        if (sectionsAbove.length > 0) {
          const prevSection = sectionsAbove[sectionsAbove.length - 1];
          prevSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDemoClick = () => {
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 2000)
  }

  return (
    <div className="app">
      <Navigation onDemoClick={handleDemoClick} />
      {showMessage && (
        <div className="demo-message">
          <p>we're working on it!</p>
        </div>
      )}
      <div className="section-container"><HeroProblem /></div>
      <div className="section-container"><RestSection /></div>
      <div className="section-container"><ProductVideo onVideoComplete={setVideoComplete} /></div>
      <div className="section-container"><Features /></div>
      <div className="section-container"><Plans /></div>
      <div className="section-container"><Testimonials /></div>
      <div className="section-container"><Footer /></div>
    </div>
  )
}

export default App

