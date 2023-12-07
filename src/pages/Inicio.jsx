import ImageHeader from "../components/image-header";
import UnderlinedNavBar from "../components/navbar";
import UnderlinedSingleNavBar from "../components/single-navbar";
import ServiciosContainer from "../components/servicios-container";
import InfoGeneral from "../components/info-general";
import VariousText from "../components/various-text";
import ServiceCardsColumn from "../components/service-cards-column";
import ProjectCard from "../components/project-card";
import Contacto from "../components/contacto";
import InfoButtons from "../components/info-buttons";
import "../css/inicio.css";

function Inicio() {
  return (
    <div className="inicio-page-container">
      <ImageHeader />
      <div className="all-pages-container">
        <div className="columns-container">

          {/* ----------- PRIMERA COLUMNA ------------*/}
          <div className="col-6ymedio mobile-hidden">
            <UnderlinedNavBar
              setActive='empresa'
            />

            <VariousText />

          </div>

          {/* ----------- SEGUNDA COLUMNA ------------*/}
          <div className="col-0 mobile-hidden"></div>

          {/* ----------- TERCERA COLUMNA ------------*/}
          <div className="col-4ymedio mobile-hidden">
            <UnderlinedSingleNavBar />
            <ServiciosContainer />
          </div>

        </div>
        {/* MOBILE VERSION */}

        <InfoGeneral />
        <div className="desktop-hidden">
          <ServiceCardsColumn />
          <p className="hidden-desktop-text">PROYECTOS</p>
          <ProjectCard
            image='constructor'
            text='Remodelación de las oficinas comerciales de Nissan en Cuba'
            day='21'
            month='03'
            year='2022'
            ratingValue='5'
            number='24'
          />
          <InfoButtons />

          <Contacto
            contW='cont-container-w1' />
            <div id="">
              <textarea id = 'message-mob' className="message" placeholder=""/>
              <button className="site-button">ENVIAR MENSAJE</button>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Inicio;
