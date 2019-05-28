import React, { useState } from 'react';
import './Display.css';

function CalculatorDisplay(props) {

  const [ whatIsDisplayed, setDisplay ] = useState('reset');

  return (
    <div id={props.id}>
      {whatIsDisplayed }
    </div>
  );
}


export default CalculatorDisplay;