
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './ContactForm.css';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [locationData, setLocationData] = useState({ city: '', country: '' });

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9Q_LgSGHz0xjheZNJNrHnfKSdV56T6_NmhHbaamHuqKlQYfRRqzD1wPs5B0YYeaSV/exec';

  useEffect(() => {
    // Fetch location data when the component mounts
    const fetchLocation = async () => {
      try {
        const response = await fetch('http://ip-api.com/json');
        if (!response.ok) {
          throw new Error('Could not fetch location');
        }
        const data = await response.json();
        setLocationData({ city: data.city, country: data.country });
      } catch (err) {
        console.error("Failed to fetch location data:", err);
        // Silently fail, so the form still works
      }
    };

    fetchLocation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important: Google Apps Script doesn't handle CORS well
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email,
          city: locationData.city,
          country: locationData.country
        }),
      });

      // Note: with no-cors, we can't inspect the response, so we optimistically assume success.
      // The catch block will handle network errors.
      
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
      setEmail(''); // Clear the input after submission
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setIsSubmitted(false);
    setError(null);
  }

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
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'JOIN WAITLIST'}
              </button>
              {error && <p className="error-message">{error}</p>}
            </form>
          </>
        ) : (
          <div className="success-message">
            <button 
              className="back-button" 
              onClick={handleBack}
              aria-label="Back to form"
            >
              ←
            </button>
            <div className="success-icon">✓</div>
            <h3>You've been added to the waitlist</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
