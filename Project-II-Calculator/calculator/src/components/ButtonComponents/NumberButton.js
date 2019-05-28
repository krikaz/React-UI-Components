import React from 'react';
import './Button.css';

function NumberButton(props) {
  const { text, id, buttonStyle } = props;
  return (
    <button id={id} className={buttonStyle}>
      {text}
    </button>
  );
}

export default NumberButton;
