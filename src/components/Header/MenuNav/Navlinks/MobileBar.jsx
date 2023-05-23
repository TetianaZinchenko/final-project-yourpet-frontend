import { Link } from 'react-router-dom';
import { NavList} from './MobileBar.styled';
// // maybe NavLink ?

export const MobileBar = () => {
  return (
    <NavList>
      <Link to="/news">News</Link>
      <Link to="/notices">Find pet</Link>
      <Link to="/friends">Our friends</Link>
    </NavList>
  );
};
