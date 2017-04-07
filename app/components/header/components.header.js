import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <nav className="c-header nav has-shadow">

        <div className="nav-left">
          <div id="logo" className="nav-item">
            <h1 className="u-logo">{ this.props.title }</h1>
          </div>
        </div>

        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="nav-right">
          { this.props.nav.map( (item, i) => <NavItem key={i} item={ item }/> ) }
        </div>

      </nav>
    )
  }
}

Header.propTypes = {
  title:        React.PropTypes.string.isRequired,
  menu:         React.PropTypes.object
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
  item: React.PropTypes.shape({
    text:     React.PropTypes.string.isRequired,
    onclick:  React.PropTypes.func,
    link:     React.PropTypes.string,
    alt:      React.PropTypes.string,
    title:    React.PropTypes.string
  })
}
