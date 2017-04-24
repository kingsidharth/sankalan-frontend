import React from 'react';

import { Menu } from '../../shared';
import nav_items from './config';

class Sidebar extends React.Component {

  render() {
    const { is_visible, children } = this.props;

    return(
      <div className={ 'c-sidebar ' + (!!is_visible ? 'is_visible' : '') } style={{ marginTop: '2.5em' }}>
        <Menu items={ nav_items } />
        { children }
      </div>
    )
  }
}

export default Sidebar;
