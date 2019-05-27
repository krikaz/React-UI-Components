import React from 'react';
import './Header.css';
import imageThumbnail from './ImageThumbnail';
import headerTitle from './HeaderTitle';
import headerContent from './HeaderContent';

function HeaderContainer() {
  return (
    <div className='container'>
      <imageThumbnail />
      <headerTitle />
      <headerContent />
    </div>
  );
}

const headerContainer = <HeaderContainer />;
export default headerContainer;