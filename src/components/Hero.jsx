import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero-dental.jpg";
import logo from "../assets/logo-carmel.png"; // this is your current logo file

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* gradient overlay helps ensure text + nav contrast */}
      <div className="hero-gradient"></div>

      <div className="hero-center">
        {/* Logo above heading: best if logo file has a transparent background.
            If not, see CSS fallback below (hero-logo-wrap). */}
        <div className="hero-logo-wrap" aria-hidden="true" data-aos="fade-in">
          <img src={logo} alt="Carmel" className="hero-logo" />
        </div>

        <h1 className="hero-title" data-aos="fade-right">
          Take your dental <br /> health <u>seriously.</u>
        </h1>

        <p className="hero-sub" data-aos="fade-left">
          We offer a wide range of services for your every dental need.
        </p>
<br></br><br></br><br></br>
        <a className="hero-cta" href="#contact">
          TALK TO A DENTIST <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
