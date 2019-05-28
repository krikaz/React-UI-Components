import React, { useState } from 'react';
import './Display.css';

function CalculatorDisplay(props) {

  const [ whatIsDisplayed, setDisplay ] = useState('reset');

  return (
    <div className={props.displayStyle}>
      {whatIsDisplayed }
    </div>
  );
}


export default CalculatorDisplay;