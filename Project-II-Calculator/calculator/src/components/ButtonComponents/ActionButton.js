import React from 'react';
import './Button.css';

function ActionButton(props) {
  const { action } = props.action;
  return <button>{action}</button>;
}

export default ActionButton;