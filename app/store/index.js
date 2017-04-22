import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducer_app from './reducer';
import initial_state from './state';


let store = createStore(
  reducer_app,
  initial_state,
  applyMiddleware(logger)
);

export default store;
