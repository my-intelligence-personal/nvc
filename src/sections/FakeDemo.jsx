
import React, { useState, useEffect } from 'react';
import './FakeDemo.css';
import { storyData } from '../story-data';

const FakeDemo = () => {
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'choice'
  const [story, setStory] = useState(null);
  const [step, setStep] = useState(0);
  const [path, setPath] = useState(['s1']);
  const [isEnding, setIsEnding] = useState(false);

  const currentPathId = path[path.length - 1];
  
  const handleStarClick = () => {
    const findEndingPath = (currentPath) => {
      let node = storyData.stories[story][currentPath[currentPath.length - 1]];
      let newPath = [...currentPath];

      while (!node.ending) {
        if (node.choice) {
          const nextChoiceId = node.choice.options[0].id;
          newPath.push(nextChoiceId);
          node = storyData.stories[story][nextChoiceId];
        } else {
          return null; // No path to an ending from here
        }
      }
      return newPath;
    };

    const finalPath = findEndingPath(path);
    if (finalPath) {
      setPath(finalPath);
      setIsEnding(true);
      setStep(0);
      setGameState('playing');
    }
  };

  const handleTickClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleChoice = (choiceId) => {
    if (gameState === 'start') {
      setStory(choiceId);
      setGameState('playing');
      setStep(0);
    } else if (gameState === 'choice') {
      const newPath = [...path, choiceId];
      setPath(newPath);
      setGameState('playing');
      setStep(0);
    }
  };
  
  const handleNext = () => {
    const storyNode = storyData.stories[story][currentPathId];
    
    if (isEnding) {
        if (step < storyNode.ending.length - 1) {
            setStep(step + 1);
        } else {
            // Last ending subtitle, maybe do nothing or show a final screen
        }
        return;
    }

    if (step < storyNode.subtitles.length - 1) {
      setStep(step + 1);
    } else {
        if (storyNode.choice) {
            setGameState('choice');
        } else if (storyNode.ending) {
            setIsEnding(true);
            setStep(0);
        }
    }
  };

  const handlePrevious = () => {
    if (isEnding && step > 0) {
        setStep(step - 1);
        return;
    }
      
    if (isEnding && step === 0) {
        setIsEnding(false);
        setStep(storyData.stories[story][currentPathId].subtitles.length - 1);
        return;
    }

    if (step > 0) {
      setStep(step - 1);
    } else {
      if (path.length > 1) {
        const newPath = path.slice(0, -1);
        setPath(newPath);
        setGameState('choice');
      }
    }
  };

  const handleRetry = () => {
    setGameState('start');
    setStory(null);
    setStep(0);
    setPath(['s1']);
    setIsEnding(false);
  };
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameState !== 'playing') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, step, path, story, isEnding]);

  const renderContent = () => {
    if (gameState === 'start') {
      return (
        <>
          <div className="demo-opening-text">{storyData.opening.text}</div>
          {storyData.opening.choices.map((choice) => (
            <div key={choice.id} className="demo-image-container" onClick={() => handleChoice(choice.id)}>
              <img src={choice.image} alt={choice.text} className="demo-image"/>
            </div>
          ))}
        </>
      );
    }

    if (gameState === 'choice') {
        const storyNode = storyData.stories[story][currentPathId];
        return (
            <>
                <div className="star-button" onClick={handleStarClick}>★</div>
                <div className="demo-opening-text">{storyNode.choice.text}</div>
                {storyNode.choice.options.map((option) => (
                    <div key={option.id} className="demo-image-container" onClick={() => handleChoice(option.id)}>
                        <img src={option.image} alt={option.text} className="demo-image"/>
                    </div>
                ))}
            </>
        )
    }

    if (gameState === 'playing' && story) {
        const storyNode = storyData.stories[story][currentPathId];
        const subtitles = isEnding ? storyNode.ending : storyNode.subtitles;
        const currentSubtitle = subtitles[step];
        const isLastSlide = isEnding && step === storyNode.ending.length - 1;
        
        const getImageUrl = () => {
            if (isEnding) {
                return `/assets/p10.jpg`;
            }
            const imageIndex = (path.length - 1) * 2 + step + 1;
            return `/assets/p${Math.min(imageIndex, 10)}.jpg`;
        };

      return (
        <>
          <div className="demo-slide-image" style={{backgroundImage: `url('${getImageUrl()}')`}}></div>
          <div className="demo-slide-text-label">{currentSubtitle}</div>

          {isLastSlide ? (
            <div className="star-button tick-button" onClick={handleTickClick}>✓</div>
          ) : (
            <div className="star-button" onClick={handleStarClick}>★</div>
          )}
          
          {step > 0 || path.length > 1 || isEnding ? (
            <div className="story-arrow story-arrow-left" onClick={handlePrevious}>←</div>
          ) : null}

          {!isLastSlide && (
            <div className="story-arrow story-arrow-right" onClick={handleNext}>→</div>
          )}
        </>
      );
    }
  };

  return (
    <div id="fake-demo" className="fake-demo-section">
      <h2>Shall we begin?</h2>
      <div className="demo-rectangle-wrapper">
        <div className="demo-rectangle">
          {renderContent()}
        </div>
      </div>
      <div style={{ minHeight: '60px', marginTop: '24px' }}>
        {story && (
          <button className="retry-button" onClick={handleRetry}>Try Again</button>
        )}
      </div>
    </div>
  );
};

export default FakeDemo;
