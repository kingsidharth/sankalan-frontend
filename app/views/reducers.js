import CONFIGS from './config';
import { find, curry, flow } from 'lodash';

import view_actions from './actions';

const IS_DASHBOARD = view_actions.view_dashboard().type;
const IS_COMPANY   = view_actions.view_company().type;

const reducer_view = (state = {}, action) => {
  // const config = find(CONFIGURATION, { type: action.type });
  let next_state = get_next_state(state);
  const config = get_configuration(CONFIGS);

  switch (action.type) {
    case IS_DASHBOARD:
      return next_state( config({ type: 'dashboard'}) );
      break;

    case IS_COMPANY:
      return next_state( config({ type: 'company'}) );
      break;

    default:
      return state;
  }
}

export default reducer_view;

const get_configuration = curry(function(configurations, condition) {
  return find(configurations, condition);
})

const get_next_state = curry(function(state, next_state){
  return Object.assign({}, state, next_state);
});
