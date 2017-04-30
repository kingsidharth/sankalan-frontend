import { cloneDeep as clone } from 'lodash';
import { types } from './actions';

const reducer_layout = (state = {}, action) => {
  let next_state = clone(state);

  switch (action.type) {
    case types.SIDEBAR_TOGGLE:
      next_state.is_visible.sidebar = !state.is_visible.sidebar;
      return next_state;
      break;

    case types.MODAL_TOGGLE:
      next_state.is_visible.modal = !state.is_visible.modal;
      return next_state;
      break;

    default:
      return state;
  }
}

export default reducer_layout;
