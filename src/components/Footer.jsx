import React from 'react';
import './Footer.css';
import Logo from '../assets/logo-navbar.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Logo / About */}
        <div className="footer-column">
          <img src={Logo} alt="Carmel Dental Logo" className="footer-logo" />
          <p className="footer-text">
           Our clinic isn’t just where teeth get fixed. It’s where confidence is built, comfort is prioritized, and technology meets expertise. Explore our range of services — each crafted with precision, care, and a touch of innovation. </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-column">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
           <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>📍 #109, 1st Floor, Carmel Complex, Geddalahalli, Kothanur Post, Hennur Road, Bangalore</li>
            <li>📞 +91 95357 78485</li>
            <li>✉️ contact@carmelcare.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Dental Clinic. All rights reserved.</p>
        <p>Website designed by <a href="https://paupetsoft.com" target="_blank" rel="noreferrer">Paupetsoft</a></p>
      </div>
    </footer>
  );
}

export default Footer;
