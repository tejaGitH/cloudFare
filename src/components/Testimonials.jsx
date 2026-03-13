import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'CTO, TechFlow',
      text: 'Cloudfaretechnologies transformed our legacy system into a modern powerhouse. Their attention to detail is unmatched.',
      image: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Innovateify',
      text: 'Professional, fast, and highly skilled. They delivered our AI-driven platform ahead of schedule with zero compromises.',
      image: 'https://i.pravatar.cc/150?u=michael'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Product Lead, Nexus',
      text: 'The UI/UX expertise they brought to our mobile app was a game-changer for our user retention rates.',
      image: 'https://i.pravatar.cc/150?u=elena'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card glass animate-fade">
              <div className="client-info">
                <img src={review.image} alt={review.name} className="client-img" />
                <div>
                  <h4>{review.name}</h4>
                  <p className="role">{review.role}</p>
                </div>
              </div>
              <p className="quote">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
