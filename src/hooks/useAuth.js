import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectAuth,
  selectIsRefreshing,
  selectToken
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectAuth),
    token: useSelector(selectToken),
  };
};


