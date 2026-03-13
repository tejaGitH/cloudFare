import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text">Cloudfare<span className="accent">technologies</span></span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary-small">Contact Us</a></li>
          </ul>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
