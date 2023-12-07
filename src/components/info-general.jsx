import React, { useState } from "react";
import VariousText from "../components/various-text";
import "../css/info-general.css";

function InfoGeneral() {
    const [showing, setShowing] = useState(true);
    console.log(showing);
    function showInfo() {
        const arrow = document.getElementById("arrow");
        const close = document.getElementById("close");
        const inft = document.getElementById("add-w");
        var info = document.getElementById("info-body");

        if (showing) {
            // mostrar cruz
            info.style.display = "none";
            setShowing(false);
            arrow.style.display = "block";
            close.style.display = "none";
            inft.classList.add("w-133");
        } 
        else {
            // mostrar arrow
            info.style.display = "block";
            setShowing(true);
            arrow.style.display = "none";
            close.style.display = "block";
            inft.classList.remove("w-133");
        }
    }

    return (
        <div className="desktop-hidden">
            <div
                id="add-w"
                className="info-title desktop-hidden"
                onClick={() => showInfo()}
            >
                <p className="bot-0 info-gen-text">INFORMACIÓN GENERAL</p>
                <img
                    id="arrow"
                    src={require(`../images/grey-arrow.png`)}
                    className="info-icon arrow"
                    alt="X"
                />
                <img
                    id="close"
                    src={require(`../images/close.png`)}
                    className="info-icon cross"
                    alt="X"
                />
            </div>

            <div id="info-body">
                <VariousText />
            </div>
        </div>
    );
}

export default InfoGeneral;
