import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Web', 'Mobile', 'AI', 'Design'];
  
  const projects = [
    { title: 'Nexus E-Commerce', category: 'Web', img: '🛒', desc: 'Scalable B2B platform' },
    { title: 'HealthSync App', category: 'Mobile', img: '🏥', desc: 'Patient management system' },
    { title: 'Innova AI', category: 'AI', img: '🧠', desc: 'Predictive analytics bot' },
    { title: 'Aether Branding', category: 'Design', img: '🎨', desc: 'Corporate identity overhaul' },
    { title: 'Fintech Portal', category: 'Web', img: '💳', desc: 'Secure payment gateway' },
    { title: 'Traveler Guide', category: 'Mobile', img: '🌍', desc: 'AR-enabled tour guide' },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Our <span className="gradient-text">Portfolio</span></h2>
        
        <div className="filter-bar">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="portfolio-card glass animate-fade">
              <div className="portfolio-visual">{project.img}</div>
              <div className="portfolio-info">
                <span className="p-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
