import React from 'react';
import { createStore } from 'redux';
//import reducer from './reducers/reducer'
//const store = createStore(reducer);

export default function TestRedux() {
  // Define an initial state value for the app
  const initialState = {
    value: ':)'
  };

  return (
    <div>
      <h1>Bye StackBlitz! {initialState.value}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
