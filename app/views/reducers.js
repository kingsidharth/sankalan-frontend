import CONFIGS from './config';
import { find, curry, flow } from 'lodash';

import { types as ACTION_TYPES } from './actions';

const IS_INIT      = ACTION_TYPES.INIT;
const IS_DASHBOARD = ACTION_TYPES.DASHBOARD;
const IS_COMPANY   = ACTION_TYPES.COMPANY;

const reducer_view = (state = {}, action) => {
  let next_state = get_next_state(state);
  const config = get_configuration(CONFIGS);

  switch (action.type) {
    case IS_INIT:
      return next_state;
      break;

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
