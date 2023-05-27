import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ModalNotice } from 'components/Notices/ModalNotice/ModalNotice';
import { NoticesCategoriesList } from '../components/Notices/NoticesCategoriesList/NoticesCategoriesList';

import {
  getNotices,
  // getIsLoading,
  // getError,
} from 'redux/notices/noticesSelectors';

import { fetchNotices } from 'redux/notices/operationsNotices';

import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { useParams } from 'react-router-dom';

// import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function NoticesPage() {
  // const [query, setQuery] = useState('');
  // const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const [showModal, setShowModal] = useState(false);
  const [pet, setPet] = useState({});

  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  const notices = useSelector(getNotices);
  // const error = useSelector(getError);

  const { categoryName } = useParams();
  const visibleNotices = notices.filter(
    notice => notice.category === categoryName
  );

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

  const onFormSubmit = query => {
    // setQuery(query);
  };

  return (
    <>
      <h1>Find your favorite pet</h1>
      <NoticesSearch onFormSubmit={onFormSubmit} />
      <NoticesCategoriesNav /*isUser={isLoggedIn}*/ />

      {notices.length > 0 && (
        <NoticesCategoriesList onClose={toggleModal} pets={visibleNotices} />
      )}

      {showModal && <ModalNotice onClose={toggleModal} pet={pet} />}
    </>
  );
}
