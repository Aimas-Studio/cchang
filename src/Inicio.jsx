import ImageHeader from "./components/image-header";
import Contacto from "./components/contacto";
import UnderlinedNavBar from "./components/navbar";
import UnderlinedSingleNavBar from "./components/single-navbar";
import HeaderText from "./components/header-text";
import "./css/inicio.css";
import OnlyText from "./components/onlytext";
import BoldText from "./components/bold-text";
import ServiceCard from "./components/service-card";

function Inicio() {
  return (
    <div className="inicio-page-container">
      <ImageHeader />
      <div className="all-pages-container">
        <div className="columns-container">
          
          {/* ----------- PRIMERA COLUMNA ------------*/}
          <div className="col-6ymedio">
            <UnderlinedNavBar />
            
            <BoldText
              bold="Cchang"
              text="es una empresa constructora, especializada en la remodelación y el mantenimiento constructivo, así como la instalación, reparación y el mantenimiento de equipos y sistemas de refrigeración y clima y eléctricos. Su experiencia la abala el trabajo realizado en instalaciones turísticas, industriales, no industrial, de la salud y administrativas."
            />
            
            <OnlyText text="Contamos con una fuerza de trabajo calificada y enfoca su gestión en lograr instalaciones confortables y sostenibles." />

            <HeaderText
              header="MISIÓN"
              text="Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes."
            />

            <HeaderText
              header="VISIÓN"
              text="Contamos con el respeto y fidelidad de nuestros clientes, internos y externos, que apuestan por la calidad, excelencia y garantía de nuestros servicios."
            />
          </div>
          
          {/* ----------- SEGUNDA COLUMNA ------------*/}
          <div className="col-0"></div>
          
          {/* ----------- TERCERA COLUMNA ------------*/}
          <div className="col-4ymedio">
            <UnderlinedSingleNavBar />
            <ServiceCard
              backgrColor='#2297FE'
              imagePath={require(`./images/electricidad.png`)}
              text='INSTALACIÓN, REPARACIÓN Y MANTENIMIENTO DE '
              title='SISTEMAS ELÉCTRICOS'
            />
            <Contacto />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inicio;
