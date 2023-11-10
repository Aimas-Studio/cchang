import "../css/underlined-navbar.css";
import React, { useState } from "react";

function UnderlinedSingleNavBar() {
  //Cambiar el estado de la barra azul
  const [activeLink, setActiveLink] = useState("SERVICIOS");

  const handleClick = (e) => {
    setActiveLink(e.target.innerText);
  };

  return (
    <nav className="nav">
      <a
        className={`nav-link nav-link-blue ${
          activeLink === "SERVICIOS" ? "active" : ""
        }`}
        href="#"
        onClick={handleClick}
      >
        SERVICIOS
      </a>
    </nav>
  );
}

export default UnderlinedSingleNavBar;
