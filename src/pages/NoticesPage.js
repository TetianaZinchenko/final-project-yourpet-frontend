import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ModalNotice } from 'components/Notices/ModalNotice/ModalNotice';
import { NoticesCategoriesList } from '../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
// import pets from 'pets.json';

import {
  getNotices,
  // getIsLoading,
  // getError,
} from 'redux/notices/noticesSelectors';

import { fetchNotices } from 'redux/notices/operationsNotices';

import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';

import { useParams,useSearchParams } from 'react-router-dom';
import { getUser } from 'redux/auth/authSelectors';

import {getUsersNotices} from 'redux/notices/operationsNotices';

// import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function NoticesPage() {
  // const [query, setQuery] = useState('');
  // const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const [showModal, setShowModal] = useState(false);
  const [pet, setPet] = useState({});
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  const notices = useSelector(getNotices);
  // const error = useSelector(getError);

  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectIsLoggedIn } = useSelector(getUser);
  const visibleNotices = notices.filter(
    notice => notice.category === categoryName
  );

  const page = searchParams.get('page') || 1;

  useEffect(() => {
    dispatch(fetchNotices());
    const searchQuery = {
      page,
    };
    
    if (categoryName === 'my-pets') {
      if (query) searchQuery.query = query;

      dispatch(getUsersNotices({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    }
    
  }, [categoryName, dispatch, page, query, setSearchParams]);

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
    setQuery(query);
  };

  return (
    <>
      <NoticesSearch onFormSubmit={onFormSubmit} />
      <NoticesCategoriesNav isUser={selectIsLoggedIn} />

      {notices.length > 0 && (
        <NoticesCategoriesList onClose={toggleModal} pets={notices} />
      )}

      {showModal && <ModalNotice onClose={toggleModal} pet={pet} />}
    </>
  );
}
