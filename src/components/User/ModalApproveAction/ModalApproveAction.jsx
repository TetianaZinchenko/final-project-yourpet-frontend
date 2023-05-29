// export const ModalApproveAction = () => {
//     return (
//         <></>
//     )
// }

import { createPortal } from 'react-dom';
import { Overlay, ModalWindow, Title, BtnWrap, BtnApprove, BtnCancel, BtnClose } from './ModalApproveAction.styled';
import { useEffect } from 'react';
import sprite from "../../../icons/icons.svg";

const modalRoot = document.querySelector('#modal-root');

export const ModalApproveAction = ({ onApprove, onClose, children }) => {
  useEffect(() => {
    const onEscClick = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscClick);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onEscClick);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
    };
    
     const closeModal = () => {
        onClose();
    }

  return createPortal(
    <Overlay onClick={onBackdropClick}>
          <ModalWindow>
              <BtnClose type="button" onClick={closeModal}>
                  <svg width="24" height="24">
                            <use href={`${sprite}#icon-cross-small`} />
                        </svg>
              </BtnClose>
              <Title>{children}</Title>
              <BtnWrap>
              <BtnCancel type='button' onClick={closeModal}>Cancel</BtnCancel>
              <BtnApprove type='button' onClick={onApprove}>Yes</BtnApprove>
                  </BtnWrap>
          </ModalWindow>
    </Overlay>,
    modalRoot
  );
};