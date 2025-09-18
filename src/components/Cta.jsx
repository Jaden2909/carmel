import React from 'react';
import './Cta.css';
import ctaBg from '../assets/cta-bg.jpeg';

function Cta() {
  return (
    <section
      className="cta"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="cta-overlay">
        <div className="cta-content" data-aos="fade-up">
          <h2>
            Regular <span>Cleaning</span> Routine
          </h2>
          <p>
            Keep your smile fresh, bright, and healthy with our professional dental cleaning sessions. 
            Regular scaling and polishing help prevent cavities, gum disease, and bad breath. 
            Invest in your oral health today — your future self will thank you.
          </p>
          <a href="#contact" className="cta-link">
            Avail Package <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
