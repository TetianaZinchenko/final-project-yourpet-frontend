import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  getUser,
  selectIsRefreshing,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(getUser),
  };
};

//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const user = useSelector(getUser);

//   return {
//     isLoggedIn,
//     isRefreshing,
//     user,
//   };
// };
