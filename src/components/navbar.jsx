import "../css/underlined-navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";


function UnderlinedNavBar( { setActive } ) {
  
  return (
    <nav className="nav main-nav">
      <Link
        className={`nav-link ${
          setActive === "empresa" ? "active" : ""
        }`}
        to='/'
        
      >
        SOBRE LA EMPRESA
      </Link>
      <Link
        className={`nav-link ${setActive === "proyectos" ? "active" : ""}`}
        to="/Proyectos"
        
      >
        PROYECTOS
      </Link>
    </nav>
  );
}

export default UnderlinedNavBar;
