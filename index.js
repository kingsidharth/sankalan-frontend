import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Layout from './app/views/default.js';
import store from './app/store';

ReactDOM.render(
  <Provider store={ store }>
    <Layout />
  </Provider>,
  document.getElementById('app')
);
