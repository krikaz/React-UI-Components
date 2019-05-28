import React from 'react';
import './Button.css';

function ActionButton(props) {
  const { action, id } = props;
  return <button id={id}>{action}</button>;
}

export default ActionButton;