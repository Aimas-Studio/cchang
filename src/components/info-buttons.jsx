import "../css/info-buttons.css";

function InfoButtons() {
  return (
    <div className="info-buttons-container">
      <button
        onClick={() =>
          window.open(
            
          )
        }
        className="site-button short-button"
      >
        VER MÁS
      </button>
      <button
        onClick={() => window.open()}
        className="site-button large-button"
      >
        OTROS PROYECTOS
      </button>
    </div>
  );
}

export default InfoButtons;
