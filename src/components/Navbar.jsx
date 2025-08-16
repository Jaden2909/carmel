import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo-navbar.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('#hero');
      const heroHeight = hero?.offsetHeight || window.innerHeight;
      const triggerPercent = 0.03; // Trigger after 3% of hero height
      const triggerPoint = heroHeight * triggerPercent;

      setScrolled(window.scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);

    // Run on mount to set correct state after reload
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {scrolled && (
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
        )}
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
