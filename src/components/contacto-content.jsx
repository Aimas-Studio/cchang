import React from "react";
import { Link } from 'react-router-dom';
import "../css/contacto.css";

function ContactoContent() {
  return (
    <div className="contacto-logos-container">
      <Link to='/'>
        <img
          className="whats-logo-image logos"
          src={require(`../images/whats-logo.png`)}
          alt="Whatsapp grey logo"
        />
      </Link>

      <Link to='/'>
        <img
          className="email-logo-image  logos"
          src={require(`../images/email-logo.png`)}
          alt="Email grey logo"
        />
      </Link>
      <Link to='/'>
        <img
          className="face-logo-image logos"
          src={require(`../images/face-logo.png`)}
          alt="Facebook grey logo"
        />
      </Link>
    </div>
  );
}

export default ContactoContent;
