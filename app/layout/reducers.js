import { cloneDeep as clone } from 'lodash';

const reducer_layout = (state = {}, action) => {
  switch (action.type) {
    case 'SIDEBAR_TOGGLE':
      let next_state = clone(state);
      next_state.is_visible.sidebar = !state.is_visible.sidebar;
      return next_state;
      break;
    default:
      return state;
  }
}

export default reducer_layout;
