import React from 'react';

const Counter = props => {
  let counter = props.value;
  return <p>Counter Komponen = {counter + 1}</p>;
}; //es6 arrow function, double arrow function

export default Counter;
