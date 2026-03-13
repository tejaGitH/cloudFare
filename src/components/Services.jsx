import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'UI/UX Design',
      desc: 'Crafting intuitive and engaging digital experiences with modern aesthetics.',
      fullDesc: 'Our UI/UX design process involves deep research into user behavior. We create wireframes, prototypes, and high-fidelity designs that not only look stunning but provide a seamless journey for your customers. We focus on minimalism, accessibility, and brand consistency.',
      icon: '🎨'
    },
    {
      title: 'Web Development',
      desc: 'Building scalable, high-performance web applications using the latest tech.',
      fullDesc: 'We specialize in full-stack web development using modern frameworks like React, Node.js, and Python. Whether it is a complex enterprise portal or a high-performance e-commerce site, we ensure clean code, SEO optimization, and rapid load times.',
      icon: '💻'
    },
    {
      title: 'Cybersecurity',
      desc: 'Protecting your digital assets with advanced security protocols and monitoring.',
      fullDesc: 'Our cybersecurity experts provide end-to-end protection against modern threats. We perform vulnerability assessments, implement robust firewalls, and set up 24/7 monitoring systems to ensure your data stays encrypted and your business remains compliant with global standards.',
      icon: '🛡️'
    },
    {
      title: 'AI & Machine Learning',
      desc: 'Integrating intelligent solutions to automate and enhance your business processes.',
      fullDesc: 'Harness the power of AI to gain insights and automate manual tasks. We build custom machine learning models for predictive analytics, natural language processing, and computer vision tailored to your specific industry needs.',
      icon: '🤖'
    },
    {
      title: 'Cloud Solutions',
      desc: 'Seamless migration and management of enterprise infrastructure on the cloud.',
      fullDesc: 'Migrate with confidence. We provide comprehensive cloud strategy, migration services, and infrastructure management on AWS, Azure, and Google Cloud. We optimize for cost-efficiency, scalability, and high availability.',
      icon: '☁️'
    },
    {
      title: 'Mobile Apps',
      desc: 'Developing seamless cross-platform mobile experiences for iOS and Android.',
      fullDesc: 'We craft high-quality mobile applications using React Native and Flutter. Our apps are designed to be fluid, responsive, and feature-rich, providing a native experience across all devices while maintaining a single codebase for faster delivery.',
      icon: '📱'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Core <span className="gradient-text">Services</span></h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass animate-fade" onClick={() => setSelectedService(service)}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="service-link">Learn More →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content glass animate-fade" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedService(null)}>&times;</button>
            <div className="modal-header">
              <span className="modal-icon">{selectedService.icon}</span>
              <h2 className="gradient-text">{selectedService.title}</h2>
            </div>
            <div className="modal-body">
              <p>{selectedService.fullDesc}</p>
              <div className="modal-features">
                <span>✓ Industry Standards</span>
                <span>✓ 24/7 Support</span>
                <span>✓ Scalable Architecture</span>
              </div>
            </div>
            <a href="#contact" className="btn-primary" onClick={() => setSelectedService(null)}>Enquire Now</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
