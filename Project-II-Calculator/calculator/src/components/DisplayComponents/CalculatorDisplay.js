import React, { useState } from 'react';
import './Display.css';

function CalculatorDisplay(props) {

  const [ whatIsDisplayed, setDisplay ] = useState('0');

  return (
    <div className={props.displayStyle}>
      {whatIsDisplayed }
    </div>
  );
}


export default CalculatorDisplay;