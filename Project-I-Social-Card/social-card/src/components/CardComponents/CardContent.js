import React from 'react';
import './Card.css';

function CardContent({heading, content}) {
  return (
    <div>
      <h3>{heading}</h3>
      <p>{content}</p>
    </div>
  );
}

export default CardContent;