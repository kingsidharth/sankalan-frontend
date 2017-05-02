import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Header extends React.PureComponent {

  render() {
    const {
      is_visible,
      title,
      nav,
      hamburger
    } = this.props;

    // CSS classnames
    const css_classes = {
      'c-header':   true,
      'nav':        true,
      'has-shadow': true,
      'is_visible': true
    }

    return(
      <nav className={ classNames(css_classes) }>

        <div className="nav-left">
          <div className="nav-item">
            <a onClick={ hamburger } id="js-drawer-nav" href="#">
              <i className="material-icons md-24">menu</i>
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
