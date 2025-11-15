import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-tagline">
            Let's create <em>calmer nights</em> and <em>brighter mornings</em>.
          </h2>
          <div className="footer-social">
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
        <div className="footer-right">
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
      </div>
    </footer>
  )
}

export default Footer

