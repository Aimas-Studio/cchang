import "../css/underlined-navbar.css";
import React, { useState } from "react";


function UnderlinedNavBar() {
  //Cambiar el estado de la barra naranja
  const [activeLink, setActiveLink] = useState("SOBRE LA EMPRESA");

  const handleClick = (e) => {
    setActiveLink(e.target.innerText);
  };

  return (
    <nav className="nav main-nav">
      <a
        className={`nav-link ${
          activeLink === "SOBRE LA EMPRESA" ? "active" : ""
        }`}
        href="#"
        onClick={handleClick}
      >
        SOBRE LA EMPRESA
      </a>
      <a
        className={`nav-link ${activeLink === "PROYECTOS" ? "active" : ""}`}
        href="#"
        onClick={handleClick}
      >
        PROYECTOS
      </a>
    </nav>
  );
}

export default UnderlinedNavBar;
