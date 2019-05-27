import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer() {
  return (
    <div className='headerContainer'>
      {imageThumbnail}
      {headerTitle}
      {headerContent}
    </div>
  );
}

const imageThumbnail = <ImageThumbnail 
imageSource = 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'
alt = 'image lambda'
/>
// console.log(imageThumbnail);

const headerTitle = <HeaderTitle heading='Lambda School @LambdaSchool 27 may' />
// console.log(headerTitle);

const headerContent = <HeaderContent 
content="Let's learnt React by building interfaces with components. Don't try to overthink it, just it keep simple and have fun. Once you feel comfortable using components, you will be on your way to mastering React!" />
// console.log(headerContent);


export default HeaderContainer;