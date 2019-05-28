import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {

  // const [ whatIsDisplayed, setDisplay ] = useState('0');

  return (
    <div className={props.displayStyle}>
      {props.text}
    </div>
  );
}


export default CalculatorDisplay;