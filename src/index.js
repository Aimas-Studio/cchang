import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import Inicio from "./pages/Inicio";
import Proyectos from "./pages/Proyectos";
import Detalles from "./pages/Detalles";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path='/' Component={Detalles}/>
      <Route path='/Proyectos' Component={Proyectos} />
      <Route path='/Detalles' Component={Detalles}/>
    </Routes>
  </Router>
);
