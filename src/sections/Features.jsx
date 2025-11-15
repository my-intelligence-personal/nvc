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

      // Cards start completely off-screen to the right (at 100vw)
      // As we scroll, they move left and come into view
      const initialOffset = window.innerWidth; // Cards start completely off-screen
      
      // Calculate how far left the cards should move
      // Total width of all cards container
      const cardsContainerWidth = motionContainer.scrollWidth;
      // We need to scroll left enough to reveal all cards
      // Start: cards at 100vw (completely hidden)
      // End: scroll left enough to show all cards
      // The translateX moves the container left, so we need to move by initialOffset + enough to show all cards
      const maxScroll = initialOffset + cardsContainerWidth - window.innerWidth;

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
      title: "Blue-Light Filter",
      image: "/assets/black-and-white.jpg"
    },
    {
      title: "Universal Compatibility",
      image: "/assets/available-everywhere.jpg"
    },
    {
      title: "Co-Creation and Choice",
      image: "/assets/yume-options.jpg"
    },
    {
      title: "AI-Generated Pictures",
      image: "/assets/yume-story.jpg"
    },
    {
      title: "Preserving Connection",
      image: "/assets/father-daughter-using-yume.jpg"
    },
    {
      title: "Adaptive Story Length",
      image: "/assets/story-length.jpg"
    },
    {
      title: "End of Story Button",
      image: "/assets/yume-ending.jpg"
    },
    {
      title: "White Noise",
      image: "/assets/yume-ending.jpg"
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
              <div key={index} className="feature-card">
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
