import { useRef, useEffect, useState } from 'react';
import './Features.css';

const LERP_FACTOR = 0.1; // Controls the smoothness/inertia. Smaller value = more inertia.

const Features = () => {
  const sectionRef = useRef(null);
  const motionContainerRef = useRef(null);
  
  // State for smooth scrolling
  const [targetScroll, setTargetScroll] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !motionContainerRef.current) return;

      const section = sectionRef.current;
      const motionContainer = motionContainerRef.current;
      
      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;

      // --- CHANGE IS HERE ---
      const cardWidth = 400; // Defined in Features.css
      // Calculate maxScroll to end with the last card centered
      const maxScroll = motionContainer.scrollWidth - window.innerWidth + (window.innerWidth / 2) - (cardWidth / 2);

      let newTargetScroll = 0;
      if (top < 0 && top > -scrollableHeight) {
        const progress = -top / scrollableHeight;
        newTargetScroll = progress * maxScroll;
      } else if (top <= -scrollableHeight) {
        newTargetScroll = maxScroll;
      }
      
      setTargetScroll(newTargetScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      const newScroll = currentScroll + (targetScroll - currentScroll) * LERP_FACTOR;
      
      // If the change is negligible, stop the animation loop
      if (Math.abs(targetScroll - newScroll) < 0.5) {
        setCurrentScroll(targetScroll);
      } else {
        setCurrentScroll(newScroll);
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [targetScroll, currentScroll]);

  useEffect(() => {
    if (motionContainerRef.current) {
      motionContainerRef.current.style.transform = `translateX(-${currentScroll}px)`;
    }
  }, [currentScroll]);

  const cards = [
    {
      title: "Sleep-friendly screen time",
      image: "/assets/black-and-white.jpg"
    },
    {
      title: "Stories that fit your rhythm",
      image: "/assets/story-length.jpg"
    },
    {
      title: "Perfectly tailored tales",
      image: "/assets/age-group.jpg"
    },
    {
      title: "Sweet dreams await",
      image: "/assets/available-everywhere.jpg"
    }
  ];

  return (
    <section id="features" className="features" ref={sectionRef}>
      <div className="features-sticky-container">
        <div className="features-motion-container" ref={motionContainerRef}>
          <div className="features-header">
            <h2 className="features-title">Engineered for better nights</h2>
          </div>
          <div className="features-cards">
            {cards.map((card, index) => (
              <div key={index} className={`feature-card ${index === 1 || index === 2 ? 'feature-card-zoom' : ''}`}>
                <div className="feature-card-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <h3 className="feature-card-title">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
