import React from 'react';
import './TechTicker.css';

const TechTicker = () => {
  const techs = [
    'React', 'Node.js', 'Python', 'AI/ML', 'Cloud Computing', 
    'Cybersecurity', 'DevOps', 'Blockchain', 'UI/UX Design', 
    'Data Analytics', 'Enterprise Web Apps'
  ];

  return (
    <div className="tech-ticker">
      <div className="ticker-content">
        {/* Double the list for seamless loop */}
        {[...techs, ...techs].map((tech, index) => (
          <div key={index} className="ticker-item">
            <span className="dot"></span>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTicker;
