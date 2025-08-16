import React from 'react';
import './About.css';
import smileImg from '../assets/smile.jpg';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-text" data-aos="fade-up" data-aos-offset="200">
        <h2>
          Serving smiles <br /> since <span className="highlight"><u>2013</u></span>
        </h2>
        <p>
          Our clinic isn’t just where teeth get fixed. It’s where confidence is built, comfort is prioritized, and technology meets expertise. Explore our range of services — each crafted with precision, care, and a touch of innovation. </p>
        <a href="#services" className="about-link">
          OUR SERVICES →
        </a>
      </div>
      <div className="about-image-container">
        <img src={smileImg} alt="Smiling patient" className="about-image" />
      </div>
    </section>
  );
}

export default About;
