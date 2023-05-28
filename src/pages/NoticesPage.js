import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NoticesCategoriesList } from '../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchNotices, getUsersNotices } from 'redux/notices/noticesOperations';
import { selectAuth, getUser } from 'redux/auth/authSelectors';

import {
  getNotices,
  getIsLoading,
  // getError,
} from 'redux/notices/noticesSelectors';

// import { fetchNotices } from 'redux/notices/operationsNotices';

// import {getUsersNotices} from 'redux/notices/operationsNotices';

// import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function NoticesPage() {
  // const [query, setQuery] = useState('');
  // const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const [showModal, setShowModal] = useState(false);
  // const [pet, setPet] = useState({});
  const [query, setQuery] = useState('');

  const auth = useSelector(selectAuth);

  const dispatch = useDispatch();
  const notices = useSelector(getNotices);
  const isLoading = useSelector(getIsLoading);

  const { categoryName } = useParams();

  let visibleNotices = [];
  switch (categoryName) {
    case 'favorite':
      if (!!auth.user.id) {
        visibleNotices = notices.filter(notice => {
          return notice.favorite.includes(auth.user.id);
        });
      }
      break;

    case 'my-pets':
      if (!!auth.user.id) {
        visibleNotices = notices.filter(notice => {
          return notice.owner === auth.user.id;
        });
      }
      break;

    default:
      visibleNotices = notices.filter(
        notice => notice.category === categoryName
      );
      break;
  }

  // todo: useSelector(Filter)
  // filtered visibleNotices by filter

  // const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectIsLoggedIn } = useSelector(getUser);
  // const visibleNotices = notices.filter(
  //   notice => notice.category === categoryName
  // );

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
    // const pet = notices.find(notice => notice._id === id);
    // setPet(pet);
  };

  const onFormSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <h1>Find your favorite pet</h1>
      <NoticesSearch onFormSubmit={onFormSubmit} />
      <NoticesCategoriesNav isUser={selectIsLoggedIn} />
      {/* {notices.length > 0 && (
        <NoticesCategoriesList onClose={toggleModal} pets={notices} /> */}
      {/* <NoticesSearch /> */}
      {/* <NoticesCategoriesNav /> */}
      {isLoading ? (
        <>Loading...</>
      ) : (
        <NoticesCategoriesList onClose={toggleModal} pets={visibleNotices} />
      )}
    </>
  );
}
