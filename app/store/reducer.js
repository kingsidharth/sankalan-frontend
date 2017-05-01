import { combineReducers } from 'redux';

import reducer_layout     from '../layout/reducers';
import reducer_view       from '../views/reducers';
import reducer_modal      from '../components/modal/reducer';

const reducer_app = combineReducers({
  layout:   reducer_layout,
  view:     reducer_view,
  sidebar:  (state = {}, action) => state,
  modal:    reducer_modal
});

export default reducer_app;
