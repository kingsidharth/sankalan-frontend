import React from 'react';
import PropTypes from 'prop-types';


class CompanyForm extends React.PureComponent {
  render() {
    const { width } = this.props;
    const style = {
      maxWidth: width
    }

    return(
      <div style={style}
          className="c-company c-company__form o-form">
        <form id="js-company-form">
          <label htmlFor="name" className="label">
            Name:
            <input name="name" type="text" className="input"></input>
          </label>

          <input className="button is-primary" type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default CompanyForm;
