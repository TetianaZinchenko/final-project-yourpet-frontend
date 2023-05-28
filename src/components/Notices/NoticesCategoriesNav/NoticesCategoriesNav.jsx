import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { List, Button } from './NoticesCategoriesNav.styled';
import PropTypes from 'prop-types';

export const filters = [
  { filter: 'sell', path: 'sell' },
  { filter: 'lost/found', path: 'lost-found' },
  { filter: 'in good hands', path: 'for-free' },
  // { filter: 'favorite ads', path: 'favorite' },
  // { filter: 'my ads', path: 'my-pets' },
];

export const NoticesCategoriesNav = () => {
  const isUser = useSelector(selectIsLoggedIn);

  const items = filters.map(({ filter, path }, item) => {
    if (!isUser && filter === 'favorite ads') {
      return null;
    }

    if (!isUser && filter === 'my ads') {
      return null;
    }

    return (
      <li key={item}>
        <Button to={`/notices/${path}`}>{filter}</Button>
      </li>
    );
  });

  return <List>{items}</List>;
};


NoticesCategoriesNav.propTypes = {
    isUser: PropTypes.bool.isRequired,
  };



