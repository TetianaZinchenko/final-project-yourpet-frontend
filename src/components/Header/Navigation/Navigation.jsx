import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { AuthNav } from '../AuthNav/AuthNav';
import { NavBar } from '../MenuNav/Navlinks/NavBar/NavBar';
import { MobileNavBar } from '../MenuNav/MobileNavBar/MobileBar';
import { MobileBtn } from './Navigation.styled';
import { UserNav } from '../UserNav/UserNav';
import { useAuth } from 'hooks/useAuth';

const DeviceSize = {
  mobile: 767,
  desktop: 1279,
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const isDesktop = useMediaQuery({ minWidth: DeviceSize.desktop });
  const handleClose = () => setOpen(false);
  const handleOpen = () => (isOpen ? setOpen(false) : setOpen(true));

  return (
    <>
     
      {!isDesktop ? (
        <MobileBtn onClick={handleOpen}>
          <AiOutlineMenu size={24} />
        </MobileBtn>
      ) : null}
      {isOpen && !isDesktop && (
        <MobileNavBar isMobile={isMobile} handleClose={handleClose} />
      )}
      {isDesktop && <NavBar />}
      {!isMobile && isLoggedIn ? <UserNav /> : null}
      {!isMobile && !isLoggedIn ? <AuthNav /> : null}
    </>
  );
};
