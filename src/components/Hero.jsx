import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade">
          <span className="badge">Innovation First</span>
          <h1 className="hero-title">
            Enterprise <span className="gradient-text">Technology Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Powering the future with cutting-edge digital transformations. We build scalable, high-performance solutions for the modern era.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get Started</a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-box glass">
            <div className="box-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="box-content">
              <div className="shimmer-line long"></div>
              <div className="shimmer-line med"></div>
              <div className="shimmer-line short"></div>
              <div className="shimmer-line long"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
