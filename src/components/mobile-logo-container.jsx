import React from 'react';
import UnderlinedNavBar from "../components/navbar";

import '../css/mobile-logo-nav.css';

function MobileLogoNav() {
    return (

        <div className="mobile-logo-nav-container desktop-hidden">
            <img
                src={require(`../images/cchang-logo.png`)}
                className='cchang-logo'
                alt="Cchang main logo"
            />
            <UnderlinedNavBar
                setActive='proyectos'
            />
        </div>
    )
}

export default MobileLogoNav;


