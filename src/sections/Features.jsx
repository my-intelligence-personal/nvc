import { useRef, useState } from 'react'
import './Features.css'

function Features() {
  const scrollContainerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const features = [
    {
      title: 'Universal compatibility',
      description: 'Works with iPad and major tablet models. Simple setup in minutes.',
      icon: '📱'
    },
    {
      title: 'Sleep mode lock',
      description: 'Locks the device into bedtime mode. Prevents app switching and late-night scrolling.',
      icon: '🔒'
    },
    {
      title: 'Blue-light filter',
      description: 'Warms the screen tone automatically as bedtime approaches. Designed to protect circadian rhythms.',
      icon: '🌙'
    },
    {
      title: 'Story co-creation',
      description: 'Your child chooses gentle story paths while you read together or your recorded voice narrates.',
      icon: '📖'
    },
    {
      title: 'Sleep insights',
      description: 'Track sleep onset patterns and story engagement to understand what helps your child rest best.',
      icon: '📊'
    }
  ]

  const handleScroll = (e) => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollLeft = container.scrollLeft
    const cardWidth = container.offsetWidth / 3 // 3 visible cards on desktop
    const index = Math.round(scrollLeft / cardWidth)
    setCurrentIndex(index)
  }

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current
    if (!container) return

    const cardWidth = container.offsetWidth / 3
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    })
  }

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Engineered for better nights</h2>
          <p className="features-subtitle">Smart enough for your tech, gentle enough for their sleep.</p>
        </div>
        <div 
          className="features-scroll-container"
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          <div className="features-cards">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="features-dots">
          {features.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

