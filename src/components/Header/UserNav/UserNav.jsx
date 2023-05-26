import UserIcon from '../../../icons/user-1.svg';
import { UserContainNav,UserImage,UserName } from "./UserNav.styled";

const UserNav = ({name}) => {
  return (
    <UserContainNav to="/user">UserPage
      <UserImage src={UserIcon} alt="userlogo" />
      <UserName>{name} Anna</UserName>
    </UserContainNav>
  );
};

export default UserNav;