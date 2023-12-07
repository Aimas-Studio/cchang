import Carousel from "../components/carousel";
import Contacto from "../components/contacto";
import ImageHeader from "../components/image-header";
import UnderlinedNavBar from "../components/navbar";
import ServicesButtons from "../components/services-buttons";

import "../css/proyectos.css";

function Proyectos() {
  return (
    <div className="proyectos-page-container">
      <ImageHeader />
      <div className="all-pages-container">
        <div className="columns-container">

          {/* ----------- PRIMERA COLUMNA ------------*/}
          <div className="proyectos-col8">
            <UnderlinedNavBar
              setActive='proyectos' 
            />
            <ServicesButtons />
          </div>



        </div>

        <div className="car-cont-container">
          <div className="carousel-col top4">
            <Carousel />
          </div>
          {/* ----------- SEGUNDA COLUMNA ------------*/}
          <div className="col-3 top4">
            <Contacto 
            contW='cont-container-w2'/>
            <div id="">
              <textarea id = 'message-p' className="message" placeholder="" cols="25" rows="5" />
              <button className="site-button">ENVIAR MENSAJE</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Proyectos;
