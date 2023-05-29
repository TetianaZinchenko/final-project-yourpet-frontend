import {Title, BtnWrap, BtnApprove, BtnCancel, BtnClose, Wrapper } from './ModalApproveAction.styled';
import sprite from "../../../icons/icons.svg";
import Modal from '../../Modal/Modal'



export const ModalApproveAction = ({ onApprove, onClose, children }) => {

    return (
        <>
            <Modal onClick={onClose}>
                <Wrapper>
                <BtnClose type="button" onClick={onClose}>
                  <svg width="24" height="24">
                            <use href={`${sprite}#icon-cross-small`} />
                        </svg>
              </BtnClose>
              <Title>{children}</Title>
              <BtnWrap>
              <BtnCancel type='button' onClick={onClose}>Cancel</BtnCancel>
              <BtnApprove type='button' onClick={onApprove}>Yes</BtnApprove>
            </BtnWrap>
                </Wrapper>
            </Modal>
        </>
    )
}
