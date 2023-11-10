import React from "react";
//import { Link } from 'react-router-dom';
import "../css/contacto.css";

function Contacto() {
  return (
    <div className="contacto-container">
      <div className="contacto-text-container">
        <p className="contacto-text">CONTACTO</p>
      </div>

      <div className="contacto-logos-container">
        <img
          className="whats-logo-image logos"
          src={require(`../images/whats-logo.png`)}
          alt="Whatsapp grey logo"
        />
        <img
          className="email-logo-image  logos"
          src={require(`../images/email-logo.png`)}
          alt="Email grey logo"
        />
        <img
          className="face-logo-image logos"
          src={require(`../images/face-logo.png`)}
          alt="Facebook grey logo"
        />
      </div>
    </div>
  );
}

export default Contacto;
