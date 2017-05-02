import React from 'react';
import PropTypes from 'prop-types';

import DashboardView from './dashboard';
import CompanyView from './company';

import { Header } from '../components';

/*
  View <-> Component Mapping
  @params
  sidebar_toggle  = function(e) // handle_hamburger_onClick
  type =            init: string
  header =          :object see <Header>
  data =            data required by the view

*/
class View extends React.Component{
  render() {
    const { sidebar_toggle, dispatch } = this.props;
    const { type, header, data } = this.props;

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
          title={ header.title }
          nav={ header.nav }
          hamburger={ sidebar_toggle }
        />

        { children }

      </div>
    )
  }
}

export default View;

View.propTypes = {
  sidebar_toggle: PropTypes.func.isRequired,

  type:     PropTypes.string.isRequired,
  data:     PropTypes.object,
  header:   PropTypes.object
}
