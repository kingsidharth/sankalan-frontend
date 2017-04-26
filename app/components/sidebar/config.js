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
      commonFunctions(e);
    }
  },
  {
    id: 2,
    title:   'Companies',
    onclick: function(e) {
      dispatch(view_actions.view_company());
      commonFunctions(e);
    }
  },
  {
    id: 2,
    title:   'Accounts',
    onclick: function(e) {
      dispatch(view_actions.view_dashboard());
      commonFunctions(e);
    }
  }
]

export default nav_items;

const commonFunctions = function(e) {
  e.preventDefault()
  return(
    dispatch(layout_actions.sidebar_toggle())
  )
}
