import { Link } from "react-router-dom";
import "../css/info-buttons.css";

function InfoButtons() {
  return (
    <div className="info-buttons-container">
        <Link to='/Detalles' className="site-button short-button">
          VER MÁS
        </Link>
        <Link to='/Proyectos'className="site-button large-button" >
          OTROS PROYECTOS
      </Link>
    </div>
  );
}

export default InfoButtons;
