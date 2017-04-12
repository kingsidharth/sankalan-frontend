import React from 'react';
import _ from 'lodash';

import { Header } from '../components';
import { Sidebar, Menu } from '../shared';
import DashboardView from './views.dashboard';
import CompanyView from './views.company';

import VIEWS from './config';


class DefaultView extends React.Component {
  constructor() {
    super();

    this.toggle_sidebar = this.toggle_sidebar.bind(this);

    /* The Active State of the entire app */
    this.state = {
      layout: {
        is_visible: {
          header:  true,
          sidebar: false,
          modal:   false
        }
      },

      sidebar: {

      },

      view: {
        type: 'company'
      }

    }
  };

  toggle_sidebar(e) {
    const current_state = this.state.layout.is_visible.sidebar;
    this.setState(prevState => ( prevState.layout.is_visible.sidebar = !current_state ));
    e.preventDefault();
  }

  render() {
    const { is_visible } = this.state.layout;

    let view = get_view_cofiguration(VIEWS, this.state.view.type);

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

export default DefaultView;


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
