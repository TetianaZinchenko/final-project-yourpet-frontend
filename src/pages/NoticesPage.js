import { useState, useEffect } from 'react';
import { ModalNotice } from 'components/Notices/ModalNotice/ModalNotice';
import { NoticesCategoriesList } from '../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
// import pets from 'pets.json';
import {
  getNotices,
  // getIsLoading,
  // getError,
} from 'redux/notices/noticesSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotices } from 'redux/notices/operationsNotices';

export default function NoticesPage() {
  const [showModal, setShowModal] = useState(false);
  const [pet, setPet] = useState({});

  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  const notices = useSelector(getNotices);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  const body = document.querySelector('body');
  showModal
    ? body.classList.add('modal-open')
    : body.classList.remove('modal-open');

  const toggleModal = id => {
    setShowModal(!showModal);
    const pet = notices.find(notice => notice._id === id);
    setPet(pet);
  };

  return (
    <>
      {notices.length > 0 && (
        <NoticesCategoriesList onClose={toggleModal} pets={notices} />
      )}
      {showModal && <ModalNotice onClose={toggleModal} pet={pet} />}
    </>
  );
}
