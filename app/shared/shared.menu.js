import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.PureComponent {
  render() {
    const { title, items } = this.props;

    return(
      <div className="menu">
        <p className="menu-label c-sidebar__title">
          { title }
        </p>
        <ul className="menu-list c-sidebar__menu">
          { items.map(
            (item, i) => <li key={i}><a onClick={item.onclick} href="#">{item.title}</a></li>
          ) }
        </ul>
      </div>
    )
  }
}

export default Menu;

Menu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired
}
