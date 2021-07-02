import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/index';
import App from './App';
//import './index.css';
class ReduxRoot extends Component {
  store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider> //,
      // document.getElementById('root')
    );
  }
}
export default ReduxRoot;
