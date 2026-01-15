import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Parikshe</h3>
            <p>Karnataka's one-stop solution for SSLC, PUC and KCET.</p>
            <p className="tagline"><strong>Where Preparation Meets Success.</strong></p>
          </div>

          <div className="footer-section">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Other Links</h4>
            <ul>
              <li><a href="#terms">Terms and Conditions</a></li>
              <li><a href="#privacy">Privacy policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <a href="mailto:contactus@parikshe.in">contactus@parikshe.in</a>
              </li>
              <li>
                <a href="tel:6366548224">6366548224</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 parikshe.in. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
