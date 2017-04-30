import { createAction } from 'redux-actions';

const view_actions = {
  view_init:      createAction('VIEW_INIT'),
  view_dashboard: createAction('VIEW_DASHBOARD'),
  view_company:   createAction('VIEW_COMPANY'),
  view_dividend:  createAction('VIEW_DIVIDEND')
}

export default view_actions;
