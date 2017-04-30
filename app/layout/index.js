import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import View from '../views';
import { Sidebar, Modal } from '../components';
import { Menu } from '../shared';

import { actions as ACTIONS } from './actions';
import VIEW_ACTIONS from '../views/actions';

class Layout extends React.Component {
  constructor() {
    super();

    this.view_init      = this.view_init.bind(this);
  };

  view_init() {
    this.props.dispatch(VIEW_ACTIONS.view_dashboard());
  }

  render() {
    const { is_visible } = this.props.layout || false;
    const { view, sidebar } = this.props;

    let bound_actions = bindActionCreators(ACTIONS, this.props.dispatch);

    if(view.type === 'init') {
      this.view_init();
    }

    return(
      <div className="layout">
        <Sidebar is_visible={ is_visible.sidebar } />
        <View
          { ...view }
          { ...bound_actions }
        />

        <Modal
          is_visible={ is_visible.modal }
          close={ bound_actions.modal_toggle }>
          <p>I am modal.</p>
        </Modal>
      </div>
    )
  }
}


const mapStateToProps = function(store) {
  return store;
}


// export default DefaultView;
export default connect(mapStateToProps)(Layout);
