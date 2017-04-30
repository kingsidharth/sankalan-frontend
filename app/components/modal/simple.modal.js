import React from 'react';

function SimpleModal(props) {

  const { children } = props;
  return(
    <div className="modal-content box">
      { children }
    </div>
  )
}

export default SimpleModal;
