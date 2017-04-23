import React from 'react';

class Sidebar extends React.PureComponent {
  render() {
    const { is_visible, children } = this.props;

    return(
      <div className={ 'c-sidebar ' + (!!is_visible ? 'is_visible' : '') } style={{ marginTop: '4em' }}>
        { children }
      </div>
    )
  }
}

export default Sidebar;
