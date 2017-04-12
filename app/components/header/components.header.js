import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.PureComponent {

  render() {
    const { title, nav, actions } = this.props;
    const ui_hamburget = actions.hamburger || false;
    const ui_logo      = actions.logo || false;

    return(
      <nav className="c-header nav has-shadow">

        <div className="nav-left">
          <div className="nav-item">
            <a onClick={ ui_hamburget } id="js-drawer-nav" href="#">
              <i className="material-icons">menu</i>
            </a>
          </div>
          <div id="logo" className="nav-item">
            <h1 className="u-logo">{ title }</h1>
          </div>
        </div>

        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="nav-right">
          { nav.map( (item, i) => <NavItem key={i} item={ item }/> ) }
        </div>

      </nav>
    )
  }
}

Header.propTypes = {
  title:        PropTypes.string.isRequired,
  menu:         PropTypes.object
}

export default Header;


class NavItem extends React.Component {
  render() {
    const { link, onclick, text } = this.props.item;
    const title = this.props.item.title || this.props.item.text;
    const alt_text = this.props.item.alt || this.props.item.text;

    return(
      <a className="nav-item is-tab"
        href={ link || '#' }
        onClick={ onclick }
        alt={ alt_text }
        >{ text }
      </a>
    )
  }
}

NavItem.propTypes = {
  item: PropTypes.shape({
    text:     PropTypes.string.isRequired,
    onclick:  PropTypes.func,
    link:     PropTypes.string,
    alt:      PropTypes.string,
    title:    PropTypes.string
  })
}
