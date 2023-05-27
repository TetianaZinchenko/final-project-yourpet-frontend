import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/modal/modalReducer';
import { removeNotice } from 'redux/notices/noticesOperations';

import {
  RemoveContainer,
  RemoveTitle,
  RemoveDescription,
  RemoveItemTitle,
  RemoveButtonsContainer,
  RemoveButtonCancel,
  RemoveButtonYes,
} from './ModalNotice.styled';

export const ModalNoticeRemove = ({ pet: { _id, title } }) => {
  const dispatch = useDispatch();

  const onCancelHandle = () => dispatch(closeModal());
  const onConfirmHandle = () => {
    dispatch(removeNotice(_id));
    onCancelHandle();
  };

  return (
    <RemoveContainer>
      <RemoveTitle>Delete adverstiment?</RemoveTitle>
      <RemoveDescription>
        <div>Are you sure you want to delete ?</div>
        <RemoveItemTitle>“{title}”</RemoveItemTitle>
        <div>You can`t undo this action.</div>
      </RemoveDescription>
      <RemoveButtonsContainer>
        <RemoveButtonCancel onClick={onCancelHandle}>Cancel</RemoveButtonCancel>
        <RemoveButtonYes onClick={onConfirmHandle}>
          <span>Yes</span>
          <FiTrash2 size={24} />
        </RemoveButtonYes>
      </RemoveButtonsContainer>
    </RemoveContainer>
  );
};
