import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Header, Sidebar } from '../components';
import { Menu } from '../shared';

import {
  DashboardView,
  CompanyView
} from '../views/';

import ACTIONS from './actions';
import VIEW_ACTIONS from '../views/actions';

class Layout extends React.Component {
  constructor() {
    super();

    this.toggle_sidebar = this.toggle_sidebar.bind(this);
    this.view_init      = this.view_init.bind(this);
  };

  view_init() {
    this.props.dispatch(VIEW_ACTIONS.view_dashboard());
  }

  toggle_sidebar(e) {
    this.props.dispatch(ACTIONS.sidebar_toggle());
    e.preventDefault();
  }

  render() {
    const { is_visible } = this.props.layout || false;
    const { view, sidebar } = this.props;

    if(view.type === 'init') {
      this.view_init();
    }

    return(
      <div>
        <Sidebar is_visible={ is_visible.sidebar } />
        <View
          view={ view }
          hamburger={ this.toggle_sidebar }
          show_header={ is_visible.header }
        />
      </div>
    )
  }
}


const mapStateToProps = function(store) {
  return store;
}


// export default DefaultView;
export default connect(mapStateToProps)(Layout);


/*
  View <-> Component Mapping
  @params
  hamburger =       function(e) // handle_hamburger_onClick
  view =            { type, header }
  show_header =     true: boolean

*/
class View extends React.Component{
  render() {
    const { hamburger, show_header } = this.props;
    const { type, header, data } = this.props.view;

    let children;
    switch (type) {
      case 'dashboard':
        children = <DashboardView data={ data } title="Dashboard" />;
        break;

      case 'company':
        children = <CompanyView data={ data } />;
        break;

      default:
        children = false;
    }

    return(
      <div id="js-frame" className="content">
        <Header
          is_visible={ show_header }
          title={ header.title }
          nav={ header.nav }
          hamburger={ hamburger }
        />

        { children }

      </div>
    )
  }
}
