import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer_app from './reducer';
import initial_state from './state';

let store = createStore(
  reducer_app,
  initial_state,
  applyMiddleware(thunk, logger)
);

const { dispatch } = store;

export default store;

export { dispatch };
