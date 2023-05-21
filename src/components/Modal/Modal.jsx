import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClick, children }) => {
  useEffect(() => {
    const onEscClick = event => {
      if (event.code === 'Escape') {
        onClick();
      }
    };

    window.addEventListener('keydown', onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onClick]);

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClick();
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
