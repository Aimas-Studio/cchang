import "../css/service-card-column.css";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./service-card";

function ServiceCardsColumn() {
  const navigate = useNavigate();

  const handleClickE = () => {
    console.log("clicked1");
    navigate("/Proyectos", { state: { isClicked1: true } });
  };

  const handleClickC = () => {
    console.log("clicked2");
    navigate("/Proyectos", { state: { isClicked2: true } });
  };

  const handleClickR = () => {
    console.log("clicked3");
    navigate("/Proyectos", { state: { isClicked3: true } });
  };

  return (
    <div className="service-cards-column-container">
      <p className="hidden-desktop-text desktop-hidden" >SERVICIOS</p>
      <ServiceCard
        backgrColor="#2297FE"
        imagePath={require(`../images/electricidad.png`)}
        text="INSTALACIÓN, REPARACIÓN Y MANTENIMIENTO DE "
        title="SISTEMAS ELÉCTRICOS"
        onClick={handleClickE}
      />

      <ServiceCard
        backgrColor='#0078DB'
        imagePath={require(`../images/clima.png`)}
        text='INSTALACIÓN, REPARACIÓN Y MANTENIMIENTO DE
        SISTEMAS Y EQUIPOS DE'
        title='REFRIGERACIÓN Y CLIMA'
        onClick={handleClickC}
      />

      <ServiceCard
        backgrColor='#181833'
        imagePath={require(`../images/remodelacion.png`)}
        text='CONSTRUCCIÓN, REMODELACIÓN Y MANTENIMIENTO DE'
        onClick={handleClickR}
      />
    </div>
  );
}
export default ServiceCardsColumn;
