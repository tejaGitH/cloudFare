import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">Cloudfare<span className="accent">technologies</span></h2>
          <p className="footer-desc">
            Your partner in enterprise-grade technology and digital transformation. Building the future, one solution at a time.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">Li</a>
            <a href="#" className="social-icon">Tw</a>
            <a href="#" className="social-icon">Ig</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li>
              <span className="icon">📞</span>
              <div>
                <p>7732075675</p>
                <p>7259002535</p>
              </div>
            </li>
            <li>
              <span className="icon">✉️</span>
              <p>info@cloudfaretech.com</p>
            </li>
            <li>
              <span className="icon">📍</span>
              <p>Silicon Valley, CA / Tech Hub, UK</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Cloudfaretechnologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
