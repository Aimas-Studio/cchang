import React from "react";
import HeaderText from "../components/header-text";
import OnlyText from "../components/onlytext";
import BoldText from "../components/bold-text";
function VariousText() {
    return (

        <div className='various-text-container'>

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
    )
}

export default VariousText;