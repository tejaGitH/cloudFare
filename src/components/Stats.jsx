import React from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { label: 'Successful Projects', value: '150+' },
    { label: 'Happy Clients', value: '80+' },
    { label: 'Experts Team', value: '45+' },
    { label: 'Years Experience', value: '10+' }
  ];

  return (
    <section className="stats">
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item animate-fade">
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
