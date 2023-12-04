import React from "react";
import { Link } from 'react-router-dom';
import "../css/contacto.css";
import ContactoText from './contacto-text';
import ContactoContent from './contacto-content';

function Contacto() {
  return (
    <div className="contacto-container">
      <ContactoText/>
      <ContactoContent/>
    </div>
  );
}

export default Contacto;
