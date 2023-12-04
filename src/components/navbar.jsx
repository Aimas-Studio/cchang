import "../css/underlined-navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";


function UnderlinedNavBar() {
  //Cambiar el estado de la barra naranja
  const [activeLink, setActiveLink] = useState("SOBRE LA EMPRESA");

  const handleClick = (e) => {
    setActiveLink(e.target.innerText);
  };

  return (
    <nav className="nav main-nav">
      <Link
        className={`nav-link ${
          activeLink === "SOBRE LA EMPRESA" ? "active" : ""
        }`}
        to='/'
        onClick={handleClick}
      >
        SOBRE LA EMPRESA
      </Link>
      <Link
        className={`nav-link ${activeLink === "PROYECTOS" ? "active" : ""}`}
        to="/Proyectos"
        onClick={handleClick}
      >
        PROYECTOS
      </Link>
    </nav>
  );
}

export default UnderlinedNavBar;
