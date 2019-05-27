import React from 'react';
import './Card.css';

function CardContent({heading, content, link}) {
  return (
    <div className='cardContent'>
      <h3>{heading}</h3>
      <p>{content}</p>
      <p>{link}</p>
    </div>
  );
}

export default CardContent;