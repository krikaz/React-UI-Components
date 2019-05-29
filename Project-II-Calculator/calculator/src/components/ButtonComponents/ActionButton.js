import React from 'react';
import './Button.css';

function ActionButton(props) {
  const { action, buttonStyle } = props;
  return <button className={buttonStyle}>{action}</button>;
}

export default ActionButton;
