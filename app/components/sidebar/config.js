import store from '../../store';
import view_actions from '../../views/actions';
import layout_actions from '../../layout/actions';

const { dispatch } = store;

const nav_items = [
  {
    id: 1,
    title:   'Dashboard',
    onclick: function(e) {
      dispatch(view_actions.view_dashboard());
      dispatch(layout_actions.sidebar_toggle());
    }
  },
  {
    id: 2,
    title:   'Companies',
    onclick: function(e) {
      dispatch(view_actions.view_company());
      dispatch(layout_actions.sidebar_toggle());
    }
  },
  {
    id: 2,
    title:   'Accounts',
    onclick: function(e) {
      dispatch(view_actions.view_dashboard());
      dispatch(layout_actions.sidebar_toggle());
    }
  }
]

export default nav_items;
