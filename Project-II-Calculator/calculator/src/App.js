import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const allNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const allNumbersElements = allNumbers.map(n => (
  <NumberButton key={n} text={n} buttonStyle="square-white" />
));
// console.log(allNumbersElements);

const allOperations = ['/', '*', '-', '+', '='];
const allOperationsElements = allOperations.map(n => (
  <NumberButton key={n} text={n} buttonStyle="square-red" />
));

const allActions = ['clear', '0'];
const allActionsElements = allActions.map(a => (
  <ActionButton key={a} action={a} buttonStyle="rectangle" />
));

const display = <CalculatorDisplay id="display" />;

const App = () => {
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="numbers">
          {allActionsElements[0]}
          <div className="oneToNine">{allNumbersElements}</div>
          {allActionsElements[1]}
        </div>
        <div className="operations">{allOperationsElements}</div>
      </div>
    </div>
  );
};

export default App;
