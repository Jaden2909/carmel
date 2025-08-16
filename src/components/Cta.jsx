import React from 'react';
import './Cta.css';
import ctaBg from '../assets/cta-bg.jpg'; // replace with your background image path

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
            Highlight specific services or products that are unique to your business here. 
            It can be your flagship product or a service that you've pioneered. 
            Give it room to shine here.
          </p>
          <a href="#packages" className="cta-link">
            Avail Package <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
