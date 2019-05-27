import React from 'react';
import './Header.css';

function ImageThumbnail(imageSource, imageAlt) {
  return (
    <img src={imageSource} alt={imageAlt}/>
  );
}



export default ImageThumbnail;