
import {
  cloneDeep as clone,
  map,
  merge
 } from 'lodash';

import { types as actions_views } from '../views/actions';
import data_formatter from './schema';
import fake_data from './fake-data';

const reducer_data = (state = {}, action) => {
  let next_state = clone(state);

  switch (action.type) {
    case actions_views.INIT:
      next_state = merge(next_state, format_data(fake_data, data_formatter));
      return next_state;
      break;
    default:
      return state;
  }
}

export default reducer_data;

function format_data(data, formatter) {
  const normalized_data = map(data, (datum, i) => formatter(datum) );
  return merge({}, ...normalized_data);
}
