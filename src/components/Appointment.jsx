import React from 'react';
import './Appointment.css';
import smileImg from '../assets/appointment-image.jpg';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Appointment = () => {
  return (
    <section className="appointment" id='contact'>
      <div className="appointment-content" data-aos="fade-right">
        <h2>
          Set up an <span>appointment</span>
        </h2>
        <ul>
          <li>
            <FaMapMarkerAlt /> #109, 1st Floor,<br></br> Carmel Complex, <br></br>Geddalahalli, Kothanur<br></br> Post, Hennur<br></br> Road, Bangalore
          </li>
          <li>
            <FaPhoneAlt />+91 95357 78485
          </li>
          <li>
            <FaEnvelope /> contact@carmelcare.in
          </li>
          <li>
            <FaInstagram /> @carmelmedicalanddentalcare
          </li>
        </ul>
        <p className="note">
          Parking for specially-abled. Assistance dogs welcome.
        </p>
      </div>
      <div className="appointment-image" data-aos="fade-left">
        <img src={smileImg} alt="Smiling woman"
        />
      </div>
    </section>
  );
};

export default Appointment;
