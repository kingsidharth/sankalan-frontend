import React from 'react';
import PropTypes from 'prop-types';

function CardModal(props) {
  const { header, footer, children } = props;
  return(
    <div className="modal-card">
      <header className="modal-card-head">
        { header }
      </header>
      <section className="modal-card-body">
        { children }
      </section>
      <footer className="modal-card-foot">
        { footer }
      </footer>
    </div>
  )
}

export default CardModal;

CardModal.propTypes = {
  children: PropTypes.any.isRequired,
  header:   PropTypes.any.isRequired,
  footer:   PropTypes.any.isRequired
}
