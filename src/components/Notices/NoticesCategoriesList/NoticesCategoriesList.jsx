import { NoticeCategoryItem } from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem';
import { AddPetButton } from 'components/Notices/AddPetButton/AddPetButton';
import { Container, List } from './NoticesCategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectModal } from 'redux/modal/modalSelectors';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import { ModalNoticeMore } from '../ModalNotice/ModalNoticeMore';
import { ModalNoticeRemove } from '../ModalNotice/ModalNoticeRemove';

export const NoticesCategoriesList = ({ pets }) => {
  const modal = useSelector(selectModal);
  //const dispatch = useDispatch();

  const body = document.querySelector('body');
  modal.type === 0
    ? body.classList.add('modal-open')
    : body.classList.remove('modal-open');

  let modalContent = null;

  switch (modal.type) {
    case 1:
      modalContent = (
        <ModalNotice>
          <ModalNoticeMore pet={modal.params}></ModalNoticeMore>
        </ModalNotice>
      );
      break;

    case 2:
      modalContent = (
        <ModalNotice>
          <ModalNoticeRemove pet={modal.params} />
        </ModalNotice>
      );
      break;

    default:
      break;
  }

  return (
    <Container>
      <AddPetButton />
      <List>
        {pets.map(pet => (
          <li key={pet._id}>
            <NoticeCategoryItem pet={pet} />
          </li>
        ))}
      </List>
      {modalContent}
    </Container>
  );
};
