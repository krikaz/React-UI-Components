import React from 'react';
import './Card.css';

function CardBanner({ imageSource, imageAlt }) {
  return <img src={imageSource} alt={imageAlt} />;
}

export default CardBanner;
