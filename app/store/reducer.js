import { combineReducers } from 'redux';

import reducer_layout     from '../layout/reducers';
import reducer_view       from '../views/reducers';
import reducer_modal      from '../components/modal/reducer';
import reducer_company    from '../components/company/reducer';

const reducer_app = combineReducers({
  layout:   reducer_layout,
  view:     reducer_view,
  sidebar:  (state = {}, action) => state,
  company:  reducer_company,
  modal:    reducer_modal
});

export default reducer_app;
