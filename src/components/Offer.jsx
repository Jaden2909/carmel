import React, { useEffect, useState } from "react";
import {
  FaTools,
  FaTooth,
  FaUserMd,
  FaChild,
  FaLightbulb,
  FaSmile,
  FaAlignCenter,
  FaTimes,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Offer.css";

// Import local service images
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";
import service7 from "../assets/service7.jpg";
import service9 from "../assets/service9.jpg";

// Import local gallery images
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

function Offer() {
  const [showGallery, setShowGallery] = useState(false);

  // Function to open gallery if hash is #gallery
  const checkHashAndOpen = () => {
    if (window.location.hash === "#gallery") {
      setShowGallery(true);
      // Optionally clear hash so it doesn’t retrigger
      window.history.replaceState(null, null, " ");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // On mount, check hash
    checkHashAndOpen();

    // Listen for hash changes
    const onHashChange = () => {
      checkHashAndOpen();
    };
    window.addEventListener("hashchange", onHashChange);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const services = [
    {
      icon: <FaTools />,
      title: "Restoration & Diagnostics",
      text: "Advanced tools for precise, confident decisions.",
      aos: "fade-right",
      img: service1,
    },
    {
      icon: <FaUserMd />,
      title: "Oral & Maxillofacial Surgery",
      text: "Where expertise meets surgical precision.",
      aos: "fade-up",
      img: service2,
    },
    {
      icon: <FaTooth />,
      title: "Root Canals Reinvented",
      text: "Single sitting RCTs — fast, painless, effective.",
      aos: "fade-left",
      img: service3,
    },
    {
      icon: <FaSmile />,
      title: "Periodontics (Gum Treatment)",
      text: "Healthy gums for a lifetime of smiles.",
      aos: "fade-right",
      img: service4,
    },
    {
      icon: <FaChild />,
      title: "Pediatric Dentistry",
      text: "Big care for little smiles.",
      aos: "fade-up",
      img: service5,
    },
    {
      icon: <FaLightbulb />,
      title: "Laser Dentistry",
      text: "Cutting-edge, painless, fast-healing treatments.",
      aos: "fade-left",
      img: service6,
    },
    {
      icon: <FaSmile />,
      title: "Cosmetic Dentistry",
      text: "Natural-looking smile makeovers you’ll love.",
      aos: "fade-right",
      img: service7,
    },
    {
      icon: <FaAlignCenter />,
      title: "Orthodontics",
      text: "Straightening smiles with precision and care.",
      aos: "fade-left",
      img: service9,
    },
  ];

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
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
            <div className="offer-inner">
              <div className="offer-front">
                <div className="offer-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <div className="offer-back">
                <img src={service.img} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Gallery Trigger */}
      <p className="view-gallery" onClick={() => setShowGallery(true)}>
        View Gallery →
      </p>

      {/* Fullscreen Gallery */}
      {showGallery && (
        <div className="gallery-overlay" onClick={() => setShowGallery(false)}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-close"
              onClick={() => setShowGallery(false)}
            >
              <FaTimes />
            </button>
            <div className="gallery-grid">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-card">
                  <img src={img} alt={`Gallery ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Offer;
