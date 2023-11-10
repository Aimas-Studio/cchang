import React from 'react';
//import { Link } from 'react-router-dom';
import '../css/image-header.css';

function ImageHeader()
{
  return (
    
    <div className='main-header-image-container'>
        <img 
            src={require(`../images/header.png`)}
            className='main-header-image'
            alt="CChang main promo image"
        />
    </div>
  )
}

export default ImageHeader;