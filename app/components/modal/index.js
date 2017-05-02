import React from 'react';
import PropTypes from 'prop-types';

import SimpleModal from './simple.modal';
import CardModal from './card.modal';

class Modal extends React.PureComponent {
  render() {
    const modal = get_modal_content(this.props);
    const { is_visible, close }= this.props || false;

    return(
      <div className={ 'modal ' + (!!is_visible ? 'is-active' : '') }>
        <div className="modal-background"></div>
        { modal }
        <button onClick={ close } className="modal-close"></button>
      </div>
    )
  }
}

export default Modal;

Modal.propTypes = {
  close:      PropTypes.func.isRequired,
  children:   PropTypes.any,
  is_visible: PropTypes.bool,
  header:     PropTypes.object,
  footer:     PropTypes.object
}

function get_modal_content(props) {
  const { header, footer, children } = props || false;

  const IS_SIMPLE = !!children && !header && !footer;
  const IS_CARD   = !!children && !!header && !!footer;

  if(IS_CARD) {
    return CardModal(props);
  } else {
    return SimpleModal(props);
  }
}
