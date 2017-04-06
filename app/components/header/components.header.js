import React from 'react';
import { Menu } from '../';

class Header extends React.Component {
  render() {
    return(
      <div className="c-header o-layout__item u-1/1 u-background-black">
        <div id="js-main-navigation" className="u-1/10 u-display-inline-block">
          <a href="#"><i className="material-icons">menu</i></a>
        </div>

        <div id="logo" className="u-3/10 u-display-inline-block">
          <h1 className="u-logo">{ this.props.title }</h1>
        </div>

        <div id="js-context-menu" className="u-7/10 u-display-inline-block">
          <Menu items={ this.props.menu_items } />
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title:        React.PropTypes.string.isRequired,
  menu_items:   React.PropTypes.array
}

export default Header;
