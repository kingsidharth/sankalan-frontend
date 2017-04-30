import React from 'react';
import PropTypes from 'prop-types';

import { Table }  from '../../shared';

class CompanyView extends React.Component {
  render() {
    const { is_single, children, data } = this.props;
    const { entity, table } = data || false;

    return(
      <div id="js-view-company"
        className={ 'js-view' + (!!is_single ? 'v-company--single' : '') }>
        <CompanyHeader { ...entity } />
        <Table config={ table.config } rows={ table.rows } />
        { children }
      </div>
    )
  }
}

CompanyView.propTypes = {
  title:    PropTypes.string
}

export default CompanyView;

function CompanyHeader(props) {
  const { name, symbol, id, type } = props;
  return(
    <div className="box">

      <div className="content">
        <h1 className="title">{ name }</h1>
        <p className="subtitle">{ symbol }</p>
      </div>
    </div>
  );
}
