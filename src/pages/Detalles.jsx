import ImageHeader from "../components/image-header";
import BackMenu from "../components/back-menu";
import Contacto from "../components/contacto";

import "../css/detalles.css";
import StaticRating from "../components/static-rating";
import RatingNumber from "../components/rating-number-container";
import ContactoContent from "../components/contacto-content";
import DynamicRating from "../components/dynamic-stars-rating";

function Detalles() {
  const Text = 'Remodelación de las oficinas';
  return (
    <div className="detalles-main-container">
      <ImageHeader />
      <div className="all-pages-container">


        <div class="detalles-container">

          {/* -------------------------------- FILA 1 --------------------------------*/}
          <div class="row">

            {/* COLUMNA 1 FILA 1 */}
            <div class="backmenu-container">
              <BackMenu />
            </div>

            {/* COLUMNA 2 FILA 1 */}
            <div class="sec-col">
              {/* VACÍA */}
            </div>

            {/* COLUMNA 3 FILA 1 */}
            <div class="third-col">
              {/* VACÍA */}
            </div>

            {/* COLUMNA 4 FILA 1 */}
            <div class="col">
              {/* VACÍA */}
            </div>
          </div>

          {/* -------------------------------- FILA 2 --------------------------------*/}
          <div class="row">
            {/* COLUMNA 1 FILA 2 */}
            <div class="backmenu-container">
              <p className="details-text">
                {Text.split(' ').map((word, index) => {
                  if (word === "Remodelación") {
                    return (<b className='bold' key={index}>Remodelación</b>);
                  }
                  else {
                    return (" " + word);
                  }
                })}
              </p>
            </div>

            {/* COLUMNA 2 FILA 2 */}
            <div class="sec-col">
              {/* VACÍA */}
            </div>

            {/* COLUMNA 3 FILA 2 */}
            <div class="third-col">
              {/* VACÍA */}
            </div>

            {/* COLUMNA 4 FILA 2 */}
            <div class="col">
              {/* VACÍA */}
            </div>
          </div>


          {/* -------------------------------- FILA 3 --------------------------------*/}
          <div class="row">

            {/* COLUMNA 1 FILA 3 */}
            <div class="backmenu-container">
              {/* VACÍA */}
            </div>

            {/* COLUMNA 2 FILA 3 */}
            <div class="sec-col">
              <p className="bold otro-text">OTRAS IMÁGENES</p>
            </div>

            {/* COLUMNA 3 FILA 3 */}
            <div class="third-col">
              <p className="bold otro-text">EXPLICACIÓN</p>
            </div>

            {/* COLUMNA 4 FILA 3 */}
            <div class="col">
              <p className="bold otro-text">CONTACTO</p>
            </div>
          </div>

          {/*-------------------------------- FILA 4 --------------------------------*/}
          <div class="row">

            {/* COLUMNA 1 FILA 4 */}
            <div class="backmenu-container">
              <img className='remod-image' src={require(`../images/constructor.png`)} />

              <div className="valoracion">
                <p className="bold valoracion-text"> VALORACIÓN </p>
                <RatingNumber ratingValue='4' number='24' starsFontSize='starsFontSize' />
              </div>
            </div>

            {/* COLUMNA 2 FILA 4 */}
            <div class="sec-col">
              <div className="containerimg">
                <div className="projectImagePrev-cont">
                  <img
                    className="image4"
                    src={require(`../images/constructor2.png`)}
                    alt="Constructor" />
                </div>
                <div className="projectImagePrev-cont">
                  <img
                    className="image4"
                    src={require(`../images/constructor2.png`)}
                    alt="Constructor" />
                </div>
                <div className="projectImagePrev-cont">
                  <img
                    className="image4"
                    src={require(`../images/constructor2.png`)}
                    alt="Constructor" />
                </div>
                <div className="projectImagePrev-cont">
                  <img
                    className="image4"
                    src={require(`../images/constructor2.png`)}
                    alt="Constructor" />
                </div>
              </div>
            </div>

            {/* COLUMNA 3 FILA 4 */}
            <div class="third-col">
              <p className="explicacion-text">
                Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes.confort; con un personal competente clientes
                y comprometido con satisfacer las exigencias de los clientes.
              </p>
              <p className="bold otro-text">CALIFICA NUESTRO TRABAJO</p>
              <DynamicRating
                number = '24'
              />
            </div>

            {/* COLUMNA 4 FILA 4 */}
            <div class="col">
              <div className='cont-log-cont'>
                <ContactoContent/>
              </div>
              <div id="">
                <textarea id = 'message-d' className="message" placeholder=""/>
                <button className="site-button">ENVIAR MENSAJE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detalles;
