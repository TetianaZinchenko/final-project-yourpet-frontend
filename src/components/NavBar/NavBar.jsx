import { Link } from 'react-router-dom';
import { NavMenu } from './NavBar.styled';


export const NavBar = () => {
  return (
    
      <NavMenu>
        <Link to="/news">News</Link>
        <Link to="/notices">Find pet</Link>
        <Link to="/friends">Our friends</Link>
      </NavMenu>
      
    
      
    
  );
};
