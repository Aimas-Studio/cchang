import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import  "../css/services-buttons.css";

function ServicesButtons() {
    const location = useLocation();
    const [clicked, setClicked] = useState({electric: false, air: false, repairs: false});

    useEffect(() => {
        if (location.state) {
            if (location.state.isClicked1) {
                setClicked({electric: true, air: false, repairs: false});
            } else if (location.state.isClicked2) {
                setClicked({electric: false, air: true, repairs: false});
            } else if (location.state.isClicked3) {
                setClicked({electric: false, air: false, repairs: true});
            }
        }
    }, [location]);
    

    const handleClick = (name) => {
        setClicked(prevState => ({...prevState, [name]: !prevState[name]}));
    }

    return (
        <nav className='cat-image-container nav'>
            <div className="categ-image" href='' onClick={() => handleClick('electric')}>
                <img src={require(`../images/${clicked.electric ? 'electric' : 'electricUnclicked'}.png`)} alt="electrics" className="serv-image-but"/>
            </div>
            <div className="categ-image" href='' onClick={() => handleClick('air')}>
                <img src={require(`../images/${clicked.air ? 'air' : 'airUnclicked'}.png`)} alt="airs" className="serv-image-but" />
            </div>
            <div className="categ-image" href='' onClick={() => handleClick('repairs')}>
                <img src={require(`../images/${clicked.repairs ? 'repairs' : 'repairsUnclicked'}.png`)} alt="repairs" className="serv-image-but"/>
            </div>
        </nav>
    );
}
export default ServicesButtons;
