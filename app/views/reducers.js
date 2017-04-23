import HEADERS from '../layout/config';
import { find } from 'lodash';

const reducer_view = (state, action) => {
  const header = find(HEADERS, { type: action.context });

  switch (action.context) {
    case 'company':
      return Object.assign({}, state, header);
      break;
    default:
      return Object.assign({}, state, header);
  }
}

export default reducer_view;
