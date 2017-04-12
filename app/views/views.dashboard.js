/*

  DASHBOARD :: VIEWS
  ===
  Default view, display portfolio summary.

  props: {
    title: STRING,

    header: { * see <Header> },

    summary: { TBD },

    table: {
      config: { * see <Table> }
      data: [
        {
          company:        STRING,
          header_key_1:   NUMBER,
          header_key_n:   NUMBER
        },
        {...}, {...}
      ]
    }
  }
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../components';
import { Table }  from '../shared';

class DashboardView extends React.Component {
  render() {
    const { title, header } = this.props;

    return(
      <div id="js-view-dashboard" className="js-view">
        <Header title={ header.title } nav={ header.nav } actions={ header.actions } />
        <Table/>
      </div>
    )
  }
}

DashboardView.propTypes = {
  title:    PropTypes.string,
  header:   PropTypes.object.isRequired,
  summary:  PropTypes.object,
  table:    PropTypes.object
}

export default DashboardView;
