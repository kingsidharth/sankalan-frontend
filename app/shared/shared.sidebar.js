import React from 'react';

class Sidebar extends React.Component {
  render() {
    const { is_visible } = this.props;

    return(
      <div className={ 'c-sidebar ' + (is_visible ? 'is_visible' : '') }>
        <aside className="menu">
          <p className="menu-label c-sidebar__title">
            General
          </p>
          <ul className="menu-list c-sidebar__menu">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
        </aside>
      </div>
    )
  }
}

export default Sidebar;
