import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducer'
import initial_state from './state'

let store = createStore(
  reducer,
  initial_state,
  applyMiddleware(logger, thunk)
);

const { dispatch } = store

export default store

export { dispatch }
