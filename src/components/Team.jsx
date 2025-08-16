import React, { useEffect, useRef, useState } from "react";
import "./Team.css";

import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";
import doctor3 from "../assets/doctor3.png";
import doctor4 from "../assets/doctor4.png";
import doctor5 from "../assets/doctor5.png";
import doctor6 from "../assets/doctor6.png";
import doctor7 from "../assets/doctor7.png";
import doctor8 from "../assets/doctor8.png";
import doctor9 from "../assets/doctor9.png";
import doctor10 from "../assets/doctor10.png";
import doctor11 from "../assets/doctor11.png";
import doctor12 from "../assets/doctor12.png";
import doctor13 from "../assets/doctor13.png";
import doctor14 from "../assets/doctor14.png";
import doctor15 from "../assets/doctor15.png";

const doctors = [
  { name: "Dr. Suja Francis", image: doctor1, specialty: "Dental Surgeon, Director" },
  { name: "Dr. Anisha Jenny", image: doctor2, specialty: "Pedodontist" },
  { name: "Dr Jini P M", image: doctor3, specialty: "Endodontist" },
  { name: "Dr Annu Pandey", image: doctor4, specialty: "Pedodontist" },
  { name: "Dr Rohit Prasad", image: doctor5, specialty: "Periodontist" },
  { name: "Dr Chris Deepak", image: doctor6, specialty: "Oral Maxillofacial Surgeon & Implantologist" },
  { name: "Dr K. Ranjan R Bhat", image: doctor7, specialty: "Orthodontist" },
  { name: "Dr Ansha Aravind", image: doctor8, specialty: "Endodontist" },
  { name: "Dr Darene Krupa Wilson", image: doctor9, specialty: "Resident Dental Surgeon" },
  { name: "Dr Anju Sarah Jacob", image: doctor10, specialty: "Orthodontist" },
  { name: "Dr Aathira Sharon", image: doctor11, specialty: "Resident Dental Surgeon" },
  { name: "Dr Shankar S", image: doctor12, specialty: "Endodontist" },
  { name: "Dr Reena Mathew", image: doctor13, specialty: "Family Physician & Diabetologist" },
  { name: "Dr Julie George", image: doctor14, specialty: "Homeopathy" },
  { name: "Dr Sunil Abraham Ninan", image: doctor15, specialty: "Child Specialist" },
];

const Team = () => {
  const contentRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!contentRef.current) return;
      const top = contentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setVisible(top < windowHeight - 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="team" className="team-section">
      <h2 className={`fade-content ${visible ? "visible" : ""}`} ref={contentRef}>
        Our Expert Team
      </h2>
      <div className="carousel-container">
        <div className="carousel-track">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className={`team-card fade-content ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <img src={doc.image} alt={doc.name} className="team-image" />
              <h3 className="team-name">{doc.name}</h3>
              <p className="team-role"><em>{doc.specialty}</em></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
