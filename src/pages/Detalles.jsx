import { Link } from "react-router-dom";
import BackMenu from "../components/back-menu";
import ContactoContent from "../components/contacto-content";
import DynamicRating from "../components/dynamic-stars-rating";
import Col1Row4 from "../components/columna1-fila4";
import FourImages from "../components/container-4img";
import Contacto from "../components/contacto";
import "../css/detalles.css";

function Detalles() {
  const Text = 'Remodelación de las oficinas';
  const Text2 = 'Remodelación de las oficinas comerciales de Nissan en Cuba';
  return (
    <div className="detalles-main-container">

      {/* BLUE HEADER */}
      <img
        src={require(`../images/headerBlue.png`)}
        className='main-header-image-mob desktop-hidden'
        alt="Blue Header"
      />

      <div className="all-pages-container">


        <div className="detalles-container mobile-hidden">

          {/* -------------------------------- FILA 1 --------------------------------*/}
          <div className="row">

            {/* COLUMNA 1 FILA 1 */}
            <div className="backmenu-container">
              <BackMenu />
            </div>

            {/* COLUMNA 2 FILA 1 */}
            <div className="sec-col">
              {/* VACÍA */}
            </div>

            {/* COLUMNA 3 FILA 1 */}
            <div className="third-col">
              {/* VACÍA */}
            </div>

            {/* COLUMNA 4 FILA 1 */}
            <div className="col">
              {/* VACÍA */}
            </div>
          </div>

          {/* -------------------------------- FILA 2 --------------------------------*/}
          <div className="row">
            {/* COLUMNA 1 FILA 2 */}
            <div className="backmenu-container">
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
            <div className="sec-col">
              {/* VACÍA */}
            </div>

            {/* COLUMNA 3 FILA 2 */}
            <div className="third-col">
              {/* VACÍA */}
            </div>

            {/* COLUMNA 4 FILA 2 */}
            <div className="col">
              {/* VACÍA */}
            </div>
          </div>


          {/* -------------------------------- FILA 3 --------------------------------*/}
          <div className="row">

            {/* COLUMNA 1 FILA 3 */}
            <div className="backmenu-container">
              {/* VACÍA */}
            </div>

            {/* COLUMNA 2 FILA 3 */}
            <div className="sec-col">
              <p className="bold otro-text">OTRAS IMÁGENES</p>
            </div>

            {/* COLUMNA 3 FILA 3 */}
            <div className="third-col">
              <p className="bold otro-text">EXPLICACIÓN</p>
            </div>

            {/* COLUMNA 4 FILA 3 */}
            <div className="col">
              <p className="bold otro-text">CONTACTO</p>
            </div>
          </div>

          {/*-------------------------------- FILA 4 --------------------------------*/}
          <div className="row">

            {/* COLUMNA 1 FILA 4 */}
            <Col1Row4
              text='VALORACIÓN'
            />

            {/* COLUMNA 2 FILA 4 */}
            <div className="sec-col">
              <FourImages />
            </div>

            {/* COLUMNA 3 FILA 4 */}
            <div className="third-col">
              <p className="explicacion-text">
                Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes.confort; con un personal competente clientes
                y comprometido con satisfacer las exigencias de los clientes.
              </p>
              <p className="bold otro-text">CALIFICA NUESTRO TRABAJO</p>
              <DynamicRating
                number='24'
              />
            </div>

            {/* COLUMNA 4 FILA 4 */}
            <div className="col">
              <div className='cont-log-cont'>
                <ContactoContent />
              </div>
              <div id="">
                <textarea id='message-d' className="message" placeholder="" />
                <button className="site-button">ENVIAR MENSAJE</button>
              </div>
            </div>
          </div>
        </div>

        {/* --------------- MOBILE IMPLEMENTATION --------------- */}
        <div className="desktop-hidden">
          <div className="back-menu-white-container">
            <Link to='/Proyectos' className="white-arrow-title">
              <div className="whiteArrowImage">
                <img className="white-arrow-image" alt="logo" src={require(`../images/whiteArrow.png`)} />
              </div>
              <p className='white-text'>Regresar al menú</p>
            </Link>
          </div>

          <p className="details-text">
            {Text2.split(' ').map((word, index) => {
              if (word === "Remodelación") {
                return (<b className='bold' key={index}>Remodelación</b>);
              }
              else {
                return (" " + word);
              }
            })}
          </p>

          <Col1Row4
            text='EXPLICACIÓN'
          />

          <p className="explicacion-text">
            Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes.confort; con un personal competente clientes
            y comprometido con satisfacer las exigencias de los clientes.
          </p>

          <p className="bold otro-text">OTRAS IMÁGENES</p>

          <FourImages />

          <p className="bold otro-text califica-text">CALIFICA NUESTRO TRABAJO</p>
          <DynamicRating
            number='24'
          />

          <Contacto
            contW='cont-container-w1' />
          <div id="">
            <textarea id='message-mob' className="message" placeholder="" />
            <button className="site-button">ENVIAR MENSAJE</button>
          </div>

        </div>
      </div>

    </div>
  );
}
export default Detalles;
