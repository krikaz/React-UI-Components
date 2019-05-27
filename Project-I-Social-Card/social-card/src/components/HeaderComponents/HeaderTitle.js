import React from 'react';
import './Header.css';

function HeaderTitle({heading, timeStamp}) {
  return (
    <h3>{heading}<span>{timeStamp}</span></h3>
  );
}

export default HeaderTitle;