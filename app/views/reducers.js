import HEADERS from '../layout/config';
import { find } from 'lodash';

import view_actions from './actions';


const reducer_view = (state, action) => {
  const header = find(HEADERS, { type: action.type });
  let next_state = Object.assign({}, state, header);

  switch (action.type) {
    case view_actions.view_dashboard:
      return next_state;
      break;

    case view_actions.view_company:
      return next_state;
      break;

    default:
      return next_state;
  }
}

export default reducer_view;
