import React from 'react';
import TestRedux from './redux/TestRedux.js';
import ReduxRoot from './redux/ReduxRoot.js';
import AppLifecycle from './lifecycle/AppLifecycle.js';
import AppLodash from './lodash/AppLodash.js';

import './style.css';

export default function App() {
  return (
    <div>
      <AppLodash />
    </div>
  );
}
