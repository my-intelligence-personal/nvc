import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-tagline">
            Let's create <em>calmer nights</em> and <em>brighter mornings</em>.
          </h2>
        </div>
        <div className="footer-right">
          <a href="https://www.instagram.com/yumeapp_official/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            <span className="social-text">@yumeapp_official</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Contact</a>
          <a href="#" className="footer-link">For partners</a>
        </div>
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Yume. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

