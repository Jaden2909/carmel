import React from "react";
import "./Hero.css";
import heroImage from "../assets/carmel.jpg"; // updated background image

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <img src={heroImage} alt="Carmel" className="hero-img" />
      </div>

      <div className="hero-btn-wrap">
        <a className="hero-cta" href="#contact">
          TALK TO A DENTIST →
        </a>
      </div>
    </section>
  );
}
