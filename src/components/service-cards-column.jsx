import "../css/service-card-column.css";
import ServiceCard from "./service-card";

function ServiceCardsColumn() {
  return (
    <div className="service-cards-column-container">
      <p className="hidden-desktop-text desktop-hidden">SERVICIOS</p>
      <ServiceCard
        backgrColor="#2297FE"
        imagePath={require(`../images/electricidad.png`)}
        text="INSTALACIÓN, REPARACIÓN Y MANTENIMIENTO DE "
        title="SISTEMAS ELÉCTRICOS"
      />

      <ServiceCard
        backgrColor='#0078DB'
        imagePath={require(`../images/clima.png`)}
        text='INSTALACIÓN, REPARACIÓN Y MANTENIMIENTO DE
        SISTEMAS Y EQUIPOS DE'
        title='REFRIGERACIÓN Y CLIMA'
      />

      <ServiceCard
        backgrColor='#181833'
        imagePath={require(`../images/remodelacion.png`)}
        text='CONSTRUCCIÓN, REMODELACIÓN Y MANTENIMIENTO DE'
      />
    </div>
  );
}
export default ServiceCardsColumn;
