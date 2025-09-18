import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Venkatesh',
      text: "Very caring and my dental follow up appointments are fixed on time according to my availability. Very welcoming environment."
    },
    {
      name: 'Noel',
      text: "Exceptional service. Dentists treated with care and the whole braces procedure was done painlessly. Very satisfied with results and procedure."
    },
    {
      name: 'George',
      text: "This dental clinic is truly a blessing, recently got my root canal done, impeccable job. Also brought my siblings. Highly recommended."
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
