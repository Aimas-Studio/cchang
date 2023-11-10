import ImageHeader from "./components/image-header";
import Contacto from "./components/contacto";
import UnderlinedNavBar from "./components/navbar";
import UnderlinedSingleNavBar from "./components/single-navbar";
import HeaderText from "./components/header-text";
import "./css/inicio.css";

function Inicio() {
  return (
    <div className="inicio-page-container">
      <ImageHeader />
      <div className="all-pages-container">
        <div className="columns-container">
          <div className="col-6ymedio">
            <UnderlinedNavBar />
            <HeaderText
              header="Misión"
              text="Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes."
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
