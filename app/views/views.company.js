import React from 'react';
import PropTypes from 'prop-types';

class CompanyView extends React.Component {
  render() {
    const { title, header, is_single, children } = this.props;

    return(
      <div id="js-view-company"
        className={ 'js-view' + (!!is_single ? 'v-company--single' : '') }>
        Company
        { children }
      </div>
    )
  }
}

CompanyView.propTypes = {
  title:    PropTypes.string,
}

export default CompanyView;
