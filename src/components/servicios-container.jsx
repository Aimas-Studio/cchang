import "../css/servicios-container.css";
import Contacto from "./contacto";
import ServiceCardsColumn from "./service-cards-column";
import ProjectCard from "./project-card";
import InfoButtons from "./info-buttons";

function ServiciosContainer() {
  return (
    <div className='two-cols-container'>
            
      <ServiceCardsColumn/>
      
      <div className='project-contacto-container'>
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

        <Contacto />
      </div>
    </div>
  );
}

export default ServiciosContainer;
