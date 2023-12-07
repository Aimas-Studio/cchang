import React from 'react';
import '../css/image-header.css';

function ImageHeader()
{
  return (
    
    <div className='main-header-image-container'>
        <img 
            src={require(`../images/header.png`)}
            className='main-header-image mobile-hidden'
            alt="CChang main promo image"
        />
        <img 
        src={require(`../images/headerMobile.png`)}
        className='main-header-image-mob desktop-hidden'
        alt = "Cchain main promo image"
        />
    </div>
  )
}

export default ImageHeader;