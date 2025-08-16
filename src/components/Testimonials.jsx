import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sharman Grover',
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
    },
    {
      name: 'Natasha Lamba',
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
    },
    {
      name: 'Jayant Daya',
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-left" data-aos="fade-right">
        <h4>Client Testimonials</h4>
        <h2>We value <span>your feedback</span></h2>
        <a href="#gallery" className="cta-link testimonials-link">
          View before after gallery <span>→</span>
        </a>
      </div>

      <div className="testimonials-right" data-aos="fade-left">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>{t.text}</p>
            <h5>- <em>{t.name}</em></h5>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
