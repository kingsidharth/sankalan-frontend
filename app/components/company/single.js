import React from 'react';
import PropTypes from 'prop-types';

class Company extends React.Component {
  render() {
    const { company, children } = this.props;

    return(
      <div className="c-company c-company--single c-card">
        <header className="c-card__header">
          <h1 className="title">{ company.name }</h1>
        </header>

        <div className="c-card__content">
          { children }
        </div>
      </div>
    )
  }
}

export default Company;

Company.propTypes = {
  company: React.PropTypes.shape({
    name:   React.PropTypes.string.isRequired
  })
}
