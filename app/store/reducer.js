import { combineReducers } from 'redux';

import reducer_layout from '../layout/reducers';
import reducer_view from '../views/reducers';

const reducer_app = combineReducers({
  layout:   reducer_layout,
  view:     reducer_view,
  sidebar:  (state = {}, action) => state
});

export default reducer_app;
