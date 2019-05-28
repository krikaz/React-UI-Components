import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import './App.css';


const allNumbers = [0,1,2,3,4,5,6,7,8,9];
const allNumbersElements = allNumbers.map(n => (<NumberButton key={n.toString()} number={n.toString()} />));
console.log(allNumbersElements);

const App = () => {
  return (
    <div>
      {allNumbersElements}
    </div>
  );
}

export default App;











// const App = () => {
//   return (
//     <div>
//       <h3>Welcome to React Calculator</h3>
//       <p>
//         We have given you a starter project. You'll want to build out your
//         components in their respective files, remove this code and replace it
//         with the proper components.
//       </p>
//       <p>
//         <strong>
//           Don't forget to `default export` your components and import them here
//           inside of this file in order to make them work.
//         </strong>
//       </p>
//     </div>
//   );
// };