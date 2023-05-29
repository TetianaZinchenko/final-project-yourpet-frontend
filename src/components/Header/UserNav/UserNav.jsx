import UserIcon from '../../../icons/user-1.svg';
import { UserContainNav, UserImage, UserName } from './UserNav.styled';
import { useAuth } from 'hooks/useAuth';

export const UserNav = () => {
  const { user } = useAuth();
  return (
    <UserContainNav to="/user">
      <UserImage src={UserIcon} alt="userlogo" />
      <UserName>{user.name}</UserName>
    </UserContainNav>
  );
};
