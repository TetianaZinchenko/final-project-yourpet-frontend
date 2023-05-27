import { AiOutlineClose } from 'react-icons/ai';

import { AuthNav } from 'components/Header/AuthNav/AuthNav';
import { UserNav } from 'components/Header/UserNav/UserNav';
import { Logo } from 'components/Header/Logo/Logo';

import {
  MobileBtn,
  MenuMobileHeader,
  CurrentLink,
  MobileContainUser,
  NavContain,
  LinksWrapper,
  LinkItem,
  StyledLink,
} from './MobileBar.styled';

export const MobileNavBar = ({ handleClose, isMobile, isLoggedIn }) => {
  return (
    <NavContain>
      <MenuMobileHeader>
        <Logo handleClose={handleClose} />
        <MobileBtn>
          <AiOutlineClose size={24} color="#FFC107" onClick={handleClose} />
        </MobileBtn>
      </MenuMobileHeader>
      <MobileContainUser>
        {isMobile ? (
          isLoggedIn ? (
            <UserNav />
          ) : (
            <AuthNav handleClose={handleClose} />
          )
        ) : null}
      </MobileContainUser>
      <LinksWrapper>
        <LinkItem>
          <StyledLink to="/news" onClick={handleClose}>
            News
          </StyledLink>
        </LinkItem>
        <LinkItem>
          <CurrentLink to="/notices" onClick={handleClose}>
            Find pet
          </CurrentLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/friends" onClick={handleClose}>
            Our friends
          </StyledLink>
        </LinkItem>
      </LinksWrapper>
    </NavContain>
  );
};
