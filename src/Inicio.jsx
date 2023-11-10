import ImageHeader from "./components/image-header";
import Contacto from "./components/contacto";
import UnderlinedNavBar from "./components/navbar";
import UnderlinedSingleNavBar from "./components/single-navbar";
import HeaderText from "./components/header-text";
import "./css/inicio.css";
import OnlyText from "./components/onlytext";

function Inicio() {
  return (
    <div className="inicio-page-container">
      <ImageHeader />
      <div className="all-pages-container">
        <div className="columns-container">
          <div className="col-6ymedio">
            <UnderlinedNavBar />
            
            <OnlyText
              text = 'Contamos con una fuerza de trabajo calificada y enfoca su gestión en lograr instalaciones confortables y sostenibles.'
            />
            
            <HeaderText
              header="MISIÓN"
              text="Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes."
            />

            <HeaderText
              header="VISIÓN"
              text="Contamos con el respeto y fidelidad de nuestros clientes, internos y externos, que apuestan por la calidad, excelencia y garantía de nuestros servicios."
            />


          </div>
          <div className="col-0">

          </div>
          <div className="col-4ymedio">
            <UnderlinedSingleNavBar />
            <Contacto />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inicio;
