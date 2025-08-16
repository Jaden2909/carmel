import React, { useEffect } from 'react';
import {
  FaTools,
  FaTeethOpen,
  FaTooth,
  FaUserMd,
  FaChild,
  FaLightbulb,
  FaSmile,
  FaMicroscope,
  FaAlignCenter
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Offer.css';

function Offer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaTools />,
      title: 'Restoration & Diagnostics',
      text: 'Advanced tools for precise, confident decisions.',
      aos: 'fade-right'
    },
    {
      icon: <FaUserMd />,
      title: 'Oral & Maxillofacial Surgery',
      text: 'Where expertise meets surgical precision.',
      aos: 'fade-up'
    },
    {
      icon: <FaTooth />,
      title: 'Root Canals Reinvented',
      text: 'Single sitting RCTs — fast, painless, effective.',
      aos: 'fade-left'
    },
    {
      icon: <FaSmile />,
      title: 'Periodontics (Gum Treatment)',
      text: 'Healthy gums for a lifetime of smiles.',
      aos: 'fade-right'
    },
    {
      icon: <FaChild />,
      title: 'Pediatric Dentistry',
      text: 'Big care for little smiles.',
      aos: 'fade-up'
    },
    {
      icon: <FaLightbulb />,
      title: 'Laser Dentistry',
      text: 'Cutting-edge, painless, fast-healing treatments.',
      aos: 'fade-left'
    },
    {
      icon: <FaSmile />,
      title: 'Cosmetic Dentistry',
      text: 'Natural-looking smile makeovers you’ll love.',
      aos: 'fade-right'
    },
    {
      icon: <FaMicroscope />,
      title: 'Diagnostic Lab',
      text: 'Safe, accurate, and convenient testing.',
      aos: 'fade-up'
    },
    {
      icon: <FaAlignCenter />,
      title: 'Orthodontics',
      text: 'Straightening smiles with precision and care.',
      aos: 'fade-left'
    }
  ];

  return (
    <section className="offer-section" id="services">
      <h2 className="offer-heading">
        What our clinic has to <span className="underline">offer!</span>
      </h2>
      <div className="offer-items">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="offer-item"
            data-aos={service.aos}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="offer-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offer;
