/*

  MENU::COMPONENTS
  ================================
  Properties:

  {
    items: []
  }

*/

import React from 'react';

class Menu extends React.Component {
  render() {
    return(
      <div className="c-menu">
        <ul className="o-list-bare">
          { this.props.items.map(
            (item, i) => <MenuItem key={ i } item={ item } />
          ) }
        </ul>
      </div>
    )
  }
}

export default Menu;

/*

  MENU ITEM
  ======

  Properties: {
    text:    STRING,
    onclick:  FUNCTION,*  (optional)
    link:     URL.STRNG,* (optional)
    alt:      STRING, (optional)
    title:    STRING  (optional)
  }

  * either onclick or link should be present
*/
class MenuItem extends React.Component {

  get_title_text(props) {
    return this.props.item.title || this.props.item.text;
  }

  get_alt_text(props) {
    return this.props.item.alt || this.props.item.text;
  }

  render() {
    return(
      <li className="c-menu__item">
        <a
          href={ this.props.item.link }
          onClick={ this.props.item.onclick }
          className={ this.get_title_text(this.props.item) }
          alt={  this.get_alt_text(this.props.item) }
          >{ this.props.item.text }</a>
      </li>
    )
  }
}

MenuItem.propTypes = {
  item: React.PropTypes.shape({
    text:     React.PropTypes.string.isRequired,
    onclick:  React.PropTypes.func,
    link:     React.PropTypes.string,
    alt:      React.PropTypes.string,
    title:    React.PropTypes.string
  })
}
