/*

  DASHBOARD :: VIEWS
  ===
  Default view, display portfolio summary.
*/

import React from 'react';
import PropTypes from 'prop-types';

import { CompanyForm } from '../../components';
import { Table } from '../../shared';

class DashboardView extends React.PureComponent {
  render() {
    const { title, data, children } = this.props;

    return(
      <div id="js-view-dashboard" className="js-view">
        <CompanyForm width="450px" />
        <Table config={ data.table.config } rows={ data.table.rows } />
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
