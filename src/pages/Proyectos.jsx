import Carousel from "../components/carousel";
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
            <UnderlinedNavBar />
            <ServicesButtons />
          </div>     
        </div>

        <div className="carousel-col">
          <Carousel/>
        </div>
      </div>
    </div>
  );
}
export default Proyectos;
