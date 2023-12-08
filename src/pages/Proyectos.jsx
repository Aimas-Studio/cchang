import { Link } from "react-router-dom";
import Carousel from "../components/carousel";
import Contacto from "../components/contacto";
import ImageHeader from "../components/image-header";
import UnderlinedNavBar from "../components/navbar";
import ServicesButtons from "../components/services-buttons";
import ProjectCard from "../components/project-card";

import "../css/proyectos.css";
import MobileLogoNav from "../components/mobile-logo-container";

function Proyectos() {
  return (
    <div className="proyectos-page-container">
      <ImageHeader />
      <MobileLogoNav 
        underlined='proyectos'
      />
      <div className="all-pages-container">
        <div className="columns-container mobile-hidden">

          {/* ----------- PRIMERA COLUMNA ------------*/}
          <div className="proyectos-col8 mobile-hidden">
            <UnderlinedNavBar
              setActive='proyectos'
            />
            <ServicesButtons />
          </div>



        </div>

        <div className="car-cont-container mobile-hidden">
          <div className="carousel-col top4">
            <Carousel />
          </div>
          {/* ----------- SEGUNDA COLUMNA ------------*/}
          <div className="col-3 top4">
            <Contacto
              contW='cont-container-w2' />
            <div id="">
              <textarea id='message-p' className="message" placeholder="" cols="25" rows="5" />
              <button className="site-button">ENVIAR MENSAJE</button>
            </div>
          </div>
          
        </div>

        {/* MOBILE VERSION IMPLEMENTATION */}
        <div className="desktop-hidden" style={{marginTop: 25+'%'}}>
          <p className="bot-0 hidden-desktop-text">PROYECTOS</p>
          <ServicesButtons />

          {/* CARRUSEL */}
          <ProjectCard
            image='constructor'
            text='Remodelación de las oficinas comerciales de Nissan en Cuba'
            day='21'
            month='03'
            year='2022'
            ratingValue='5'
            number='24'
          />
          <Link to='/Detalles'>
            <button className="ver-mas-button-grey">
              VER MÁS
            </button>
          </Link>

          <ProjectCard
            image='constructor'
            text='Remodelación de las oficinas comerciales de Nissan en Cuba'
            day='21'
            month='03'
            year='2022'
            ratingValue='5'
            number='24'
          />
          <Link to='/Detalles'>
            <button className="ver-mas-button-grey">
              VER MÁS
            </button>
          </Link>


          <Contacto
            contW='cont-container-w1' />
          <div id="">
            <textarea id='message-mob' className="message" placeholder="" />
            <button className="site-button">ENVIAR MENSAJE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proyectos;
