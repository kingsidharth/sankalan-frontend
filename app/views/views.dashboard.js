/*

  DASHBOARD :: VIEWS
  ===
  Default view, display portfolio summary.
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Table }  from '../shared';

class DashboardView extends React.Component {
  render() {
    const { title, children } = this.props;

    return(
      <div id="js-view-dashboard" className="js-view">
        <Table/>
        { children }
      </div>
    )
  }
}

DashboardView.propTypes = {
  title:    PropTypes.string,
  summary:  PropTypes.object,
  table:    PropTypes.object
}

export default DashboardView;
