import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Header } from '../components';
import { Sidebar, Menu } from '../shared';
import DashboardView from '../views/views.dashboard';
import CompanyView from '../views/views.company';

import ACTIONS from './actions';

class Layout extends React.Component {
  constructor() {
    super();

    this.toggle_sidebar = this.toggle_sidebar.bind(this);
  };

  toggle_sidebar(e) {
    this.props.dispatch(ACTIONS.sidebar_toggle());
    e.preventDefault();
  }

  render() {
    const { is_visible } = this.props.layout || false;
    const { view } = this.props;

    return(
      <div>
        <Sidebar is_visible={ is_visible.sidebar }>
          <Menu items={ [] } />
        </Sidebar>

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
    const { type, header } = this.props.view;

    let children;
    switch (type) {
      case 'dashboard':
        children = <DashboardView title="Dashboard" />;
        break;

      case 'company':
        children = <CompanyView />;
        break;

      default:
        children = <CompanyView />;
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
