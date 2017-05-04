import { combineReducers } from 'redux'

import reducer_layout     from '../layout/reducers'
import reducer_view       from '../views/reducers'
import reducer_data       from '../data/reducer'
import reducer_modal      from '../components/modal/reducer'
import reducer_company    from '../components/company/reducer'

export default combineReducers({
  layout:   reducer_layout,
  view:     reducer_view,
  data:     reducer_data,
  company:  reducer_company,
  modal:    reducer_modal,
  sidebar:  (state = {}, action) => state
})
