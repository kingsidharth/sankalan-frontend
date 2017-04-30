import { createTypes, actionCreator } from 'redux-action-creator';

export const types = createTypes([
  'SIDEBAR_TOGGLE',
  'MODAL_TOGGLE'
])


export const actions = {
  sidebar_toggle:   actionCreator(types.SIDEBAR_TOGGLE),
  modal_toggle:     actionCreator(types.MODAL_TOGGLE)
}
