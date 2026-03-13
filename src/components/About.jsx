import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-visual animate-fade">
          <div className="about-image-stack">
            <div className="img-box box-1 glass">
              <span className="count">10+</span>
              <p>Years of Excellence</p>
            </div>
            <div className="img-box box-2 glass">
              <span className="count">150+</span>
              <p>Projects Delivered</p>
            </div>
          </div>
        </div>
        
        <div className="about-content animate-fade">
          <span className="badge">Who We Are</span>
          <h2 className="section-title text-left">Driving Innovation Through <span className="gradient-text">Excellence</span></h2>
          <p className="about-text">
            Cloudfaretechnologies is a leading provider of digital solutions, dedicated to helping businesses navigate the complexities of the modern technological landscape. Founded with a vision to empower organizations, we specialize in high-impact software development, cloud infrastructure, and cybersecurity.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <div>
                <h4>Our Mission</h4>
                <p>To deliver scalable, future-proof technology that drives sustainable growth for our partners.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💡</div>
              <div>
                <h4>Our Vision</h4>
                <p>To be the global benchmark for innovation in enterprise digital transformation.</p>
              </div>
            </div>
          </div>
          <a href="#contact" className="btn-primary">Connect With Us</a>
        </div>
      </div>
    </section>
  );
};

export default About;
