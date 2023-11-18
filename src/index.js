import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import Inicio from "./pages/Inicio";
import Proyectos from "./pages/Proyectos";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Proyectos />
    {/* <Inicio /> */}
  </React.StrictMode>
);
