import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const cardBanner = <CardBanner 
imageSource='https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'
imageAlt='react background'
/>

const cardContent = <CardContent
heading = 'Get started with React'
content = 'React makes it painless to create interactive UIs. Designe simple views for each state in your application' 
/>

function CardContainer() {
  return (
    <a href='https://reactjs.org/'>
      <div className='cardContainer'>
        {cardBanner}
        {cardContent}
    </div>
    </a>

  );
}

export default CardContainer;