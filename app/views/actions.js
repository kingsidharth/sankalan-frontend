import { createTypes, actionCreator } from 'redux-action-creator';

export const types = createTypes([
  'INIT',
  'COMPANY',
  'DASHBOARD',
  'DIVIDEND'
], 'VIEW');

export const actions = {
  view_init:      actionCreator(types.INIT),
  view_company:   actionCreator(types.COMPANY),
  view_dashboard: actionCreator(types.DASHBOARD),
  view_dividend:  actionCreator(types.DIVIDEND)
}
