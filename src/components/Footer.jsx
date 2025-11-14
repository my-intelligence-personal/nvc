import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="footer-logo-text">YUME</span>
        </div>
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

