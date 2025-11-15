
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './ContactForm.css';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trigger confetti from left side
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 }
    });

    // Trigger confetti from right side
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 }
    });

    setIsSubmitted(true);
  };

  return (
    <div id="waitlist" className="contact-form-section">
      <div className="form-container">
        {!isSubmitted ? (
          <>
            <h3>Join the Waitlist</h3>
            <p>Be among the first to experience Yume. Get early access and exclusive updates.</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">E-MAIL</label>
                <input type="email" id="email" name="email" required />
              </div>
              <button type="submit" className="submit-button">JOIN WAITLIST</button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>You've been added to the waitlist</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
