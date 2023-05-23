// import {UserNav} from '../UserNav/UserNav'
import { AuthNav } from "../AuthNav/AuthNav";
import { NavBar } from "../MenuNav/Navlinks/NavBar/NavBar";
// import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  //  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavBar />
          {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
<AuthNav/>
      

     
    </>
  );
};
