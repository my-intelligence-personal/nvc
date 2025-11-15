
import React, { useState, useEffect } from 'react';
import './FakeDemo.css';

const FakeDemo = () => {
  const [choiceMade, setChoiceMade] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  // SAM images for each slide (10 slides mapped to 5 images)
  const slideImages = {
    1: '/assets/sam 1.jpg',
    2: '/assets/sam 1.jpg',
    3: '/assets/sam 2.jpg',
    4: '/assets/sam 2.jpg',
    5: '/assets/sam 3.jpg',
    6: '/assets/sam 3.jpg',
    7: '/assets/sam 4.jpg',
    8: '/assets/sam 4.jpg',
    9: '/assets/sam 5.jpg',
    10: '/assets/sam 5.jpg',
  };

  // Story text for each slide (10 slides total)
  const slideTexts = {
    1: "A brave traveler named Sam stood at the ocean's edge.",
    2: "Glowing rainbow stepping stones floated on the water ahead.",
    3: "Sam hopped across the colorful stones.",
    4: "Happy dolphins splashed and jumped in the sparkling waves below.",
    5: "Sam rested on a wide stone in the middle of the ocean.",
    6: "A friendly pelican sat nearby sharing crackers.",
    7: "Dark clouds gathered but the stones glowed brighter.",
    8: "The dolphins swam close, guiding Sam safely forward.",
    9: "Sam reached the sandy beach with tall palm trees.",
    10: "Sam waved goodbye to the dolphins and magical stones.",
  };

  const handleChoice = (e) => {
    e.preventDefault();
    const scrollPosition = window.scrollY;
    setChoiceMade(true);
    setCurrentSlide(1);
    // Maintain scroll position
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
    });
  };

  const handleRightArrowClick = () => {
    if (currentSlide < 10) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleLeftArrowClick = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleStarClick = () => {
    setCurrentSlide(10);
  };

  const handleTickClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleRetry = () => {
    setChoiceMade(false);
    setCurrentSlide(1);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!choiceMade) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide > 1) {
          setCurrentSlide(currentSlide - 1);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentSlide < 10) {
          setCurrentSlide(currentSlide + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [choiceMade, currentSlide]);

  const currentImage = slideImages[currentSlide];
  const currentText = slideTexts[currentSlide];

  return (
    <div id="fake-demo" className="fake-demo-section">
      <h2>Try the demo below</h2>
      <div className="demo-rectangle-wrapper">
        <div className="demo-rectangle">
          {!choiceMade ? (
            <>
              <div className="demo-image-container" onClick={handleChoice}>
                <img src="/assets/scenario 1.jpg" alt="Scenario 1" className="demo-image" />
              </div>
              <div className="demo-image-container" onClick={handleChoice}>
                <img src="/assets/scenario 2.jpg" alt="Scenario 2" className="demo-image" />
              </div>
              <div className="demo-image-container" onClick={handleChoice}>
                <img src="/assets/scenario 3.jpg" alt="Scenario 3" className="demo-image" />
              </div>
            </>
          ) : (
            <>
              <img 
                src={currentImage} 
                alt={`Slide ${currentSlide}`} 
                className="demo-slide-image"
              />
              <div className="demo-slide-text">
                {currentText}
              </div>
              {currentSlide > 1 && (
                <div className="story-arrow story-arrow-left" onClick={handleLeftArrowClick}>←</div>
              )}
              {currentSlide < 10 && (
                <div className="story-arrow story-arrow-right" onClick={handleRightArrowClick}>→</div>
              )}
              {currentSlide === 10 ? (
                <div className="star-button tick-button" onClick={handleTickClick}>✓</div>
              ) : (
                <div className="star-button" onClick={handleStarClick}>★</div>
              )}
            </>
          )}
        </div>
      </div>
      <div style={{ minHeight: choiceMade ? 'auto' : '60px', marginTop: '24px' }}>
        {choiceMade && (
          <button className="retry-button" onClick={handleRetry}>Try Again</button>
        )}
      </div>
    </div>
  );
};

export default FakeDemo;
