import { useSelector, useDispatch } from 'react-redux';
import { NoticesCategoriesList } from '../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { useParams } from 'react-router-dom';
import { fetchNotices } from 'redux/notices/noticesOperations';
import { selectAuth } from 'redux/auth/authSelectors';

import {
  getNotices,
  getIsLoading,
  // getError,
} from 'redux/notices/noticesSelectors';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';

export default function NoticesPage() {
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

  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  return (
    <>
      <h1>Find your favorite pet</h1>
      <NoticesSearch />
      <NoticesCategoriesNav />
      {isLoading ? <Loader /> : <NoticesCategoriesList pets={visibleNotices} />}
    </>
  );
}
