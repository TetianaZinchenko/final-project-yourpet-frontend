

import { UserContainNav, StyledLink } from './UserNav.styled.jsx';
import { useAuth } from 'hooks/useAuth.js';

export const UserNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <UserContainNav>{isLoggedIn && <StyledLink to="/user">UserPage</StyledLink>}</UserContainNav>
  );
};

