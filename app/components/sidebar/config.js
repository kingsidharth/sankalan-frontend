import store from '../../store';
import view_actions from '../../views/actions';

const { dispatch } = store;

const nav_items = [
  {
    id: 1,
    title:   'Dashboard',
    onclick: function(e) { dispatch(view_actions.view_dashboard()) }
  },
  {
    id: 2,
    title:   'Companies',
    onclick: function(e) { dispatch(view_actions.view_company()) }
  },
  {
    id: 2,
    title:   'Accounts',
    onclick: function(e) { dispatch(view_actions.view_dashboard()) }
  }
]

export default nav_items;
