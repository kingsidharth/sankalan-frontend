import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import View from '../views';
import { Sidebar, Modal } from '../components';
import { Menu } from '../shared';

import { actions as ACTIONS } from './actions';
import { actions as VIEW_ACTIONS } from '../views/actions';

class Layout extends React.Component {
  constructor() {
    super();
  };

  render() {
    const { is_visible } = this.props.layout || false;
    const {
      view,
      sidebar,
      modal,
      dispatch
    } = this.props;

    let bound_actions = bindActionCreators(ACTIONS, dispatch);

    if(view.type === 'init') {
      dispatch(VIEW_ACTIONS.view_dashboard());
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
          close={ bound_actions.modal_toggle }
          {...modal}>
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
