import React from 'react';
import './style.css';

export default function TestRedux() {
  // Define an initial state value for the app
  const initialState = {
    value: 0
  };

  return (
    <div>
      <h1>Bye StackBlitz! {initialState}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
