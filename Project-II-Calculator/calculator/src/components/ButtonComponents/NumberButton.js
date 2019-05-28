import React from 'react';
import './Button.css';

function NumberButton(props) {
  const { number, id } = props;
  return <button id={id}>{number}</button>;
}

export default NumberButton;
