import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <h2>Parikshe</h2>
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="dropdown">
            <span>Study</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/sslc" onClick={() => setIsMenuOpen(false)}>SSLC</Link>
              </li>
              <li><a href="#puc-science">PUC - Science</a></li>
              <li><a href="#puc-commerce">PUC - Commerce</a></li>
            </ul>
          </li>
          <li>
            <Link 
              to="/careers" 
              className={isActive('/careers') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
