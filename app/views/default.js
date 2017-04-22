import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Header } from '../components';
import { Sidebar, Menu } from '../shared';
import DashboardView from './views.dashboard';
import CompanyView from './views.company';

import VIEWS from './config';


class Layout extends React.Component {
  constructor() {
    super();

    this.toggle_sidebar = this.toggle_sidebar.bind(this);

    /* The Active State of the entire app */
    // this.state = {
    //   layout: {
    //     is_visible: {
    //       header:  true,
    //       sidebar: false,
    //       modal:   false
    //     }
    //   },
    //
    //   sidebar: {
    //
    //   },
    //
    //   view: {
    //     type: 'company'
    //   }
    //
    // }
  };

  toggle_sidebar(e) {
    const current_state = this.state.layout.is_visible.sidebar;
    this.setState(prevState => ( prevState.layout.is_visible.sidebar = !current_state ));
    e.preventDefault();
  }

  render() {
    const { is_visible } = this.props.layout || false;

    let view = get_view_cofiguration(VIEWS, this.props.view.type);

    return(
      <div>
        <Sidebar is_visible={ is_visible.sidebar }>
          <Menu />
        </Sidebar>

        <View view={ view } />
      </div>
    )
  }
}


const mapStateToProps = function(store) {
  return store;
}


// export default DefaultView;
export default connect(mapStateToProps)(Layout);


/* View <-> Component Mapping */
class View extends React.Component{
  render() {
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
        <Header title={ header.title } nav={ header.nav } actions={ header.actions } />
        { children }
      </div>
    )
  }
}

function get_view_cofiguration(views, type) {
  return _.find(views, { type: type }) || {};
}
