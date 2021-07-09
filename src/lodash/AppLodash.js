import React, { Component } from 'react';
//import './App.css';
var _ = require('lodash');

class AppLodash extends Component {
  test = 'There';

  render() {
    console.log(_);
    return <div>Hi {this.test} </div>;
  }
}
export default AppLifecycle;
