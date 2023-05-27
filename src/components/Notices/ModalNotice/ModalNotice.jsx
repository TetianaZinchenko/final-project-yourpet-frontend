import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CgClose } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/modal/modalReducer';
import { Backdrop, Content, BtnClose } from './ModalNotice.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalNotice = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [dispatch]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeModal());
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        <BtnClose type="button" onClick={() => dispatch(closeModal())}>
          <CgClose size={22} color="#54ADFF" />
        </BtnClose>
        {children}
      </Content>
    </Backdrop>,
    modalRoot
  );
};
