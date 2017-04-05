import React from 'react';

class DefaultView extends React.Component {
  constructor() {
    super();

    /* The Active State of the entire app */
    this.state = {
      title: 'Sankalan'
    }

  };

  render() {
    return(
      <div className="o-layout">
        <Header title={ this.state.title } />
      </div>
    )
  }

}

export default DefaultView;

class Header extends React.Component {
  render() {
    return(
      <div className="c-header o-layout__item u-1/1 u-background-black">
        <div id="logo">
          <h1 className="u-logo">{ this.props.title }</h1>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}
