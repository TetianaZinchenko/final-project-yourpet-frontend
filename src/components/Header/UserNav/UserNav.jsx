import UserIcon from '../../../icons/user-1.svg';
import { UserContainNav,UserImage,UserName } from "./UserNav.styled";

export const UserNav = ({email}) => {
  return (
    <UserContainNav to="/user">
      <UserImage src={UserIcon} alt="userlogo" />
      <UserName>{email} Anna</UserName>
    </UserContainNav>
  );
};

