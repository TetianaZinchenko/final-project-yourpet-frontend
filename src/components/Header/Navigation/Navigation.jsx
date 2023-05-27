import { useState } from 'react';
import { AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { AuthNav } from '../AuthNav/AuthNav';
import { NavBar } from '../MenuNav/Navlinks/NavBar/NavBar';
import { MobileNavBar } from '../MenuNav/MobileNavBar/MobileBar';
import { MobileBtn } from './Navigation.styled';
import { UserNav } from '../UserNav/UserNav';

const DeviceSize = {
  mobile: 767,
  desktop: 1279,
};

export const Navigation = ({ isLoggedIn }) => {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const isDesktop = useMediaQuery({ minWidth: DeviceSize.desktop });
  const handleClose = () => setOpen(false);
  const handleOpen = () => (isOpen ? setOpen(false) : setOpen(true));

  return (
    
    <>
      <MobileBtn onClick={handleOpen}>
        {isOpen && !isDesktop ? (
          <AiOutlineClose size={24}/>
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </MobileBtn>
      {isOpen && !isDesktop && (
        <MobileNavBar isMobile={isMobile} handleClose={handleClose} />
      )}

      {isDesktop && <NavBar />}

      {!isMobile ? isLoggedIn ? <UserNav /> : <AuthNav /> : null}
    </>
  );
 
};
