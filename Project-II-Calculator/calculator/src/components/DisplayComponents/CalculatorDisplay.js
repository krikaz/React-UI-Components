import React, { useState } from 'react';
import './Display.css';

function CalculatorDisplay() {

  const [ whatIsDisplayed, setDisplay ] = useState('reset');

  return (
    <div>
      {whatIsDisplayed}
    </div>
  );
}


export default CalculatorDisplay;