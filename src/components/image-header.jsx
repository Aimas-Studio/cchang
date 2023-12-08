import React from 'react';
import '../css/image-header.css';

function ImageHeader({detalles}) {
  return (

    <div className='main-header-image-container'>
      <img
        src={require(`../images/header.png`)}
        className='main-header-image mobile-hidden'
        alt="CChang main promo"
      />
      <img
        src={require(`../images/headerMobile.png`)}
        className='main-header-image-mob desktop-hidden'
        alt="Cchang main promo"
      />
    </div>
  )
}

export default ImageHeader;