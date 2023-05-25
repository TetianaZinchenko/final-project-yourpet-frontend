import {
  NavContain,
  LinksWrapper,
  LinkItem,
  StyledLink,
} from './MobileBar.styled';
import { AuthNav } from 'components/Header/AuthNav/AuthNav';


export const MobileNavBar = ({ handleClose }) => {
  return (
    <NavContain>
      <LinksWrapper>
        <AuthNav handleClose={handleClose} />
        <LinkItem>
          <StyledLink to="/news" onClick={handleClose}>
            News
          </StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/notices" onClick={handleClose}>
            Find pet
          </StyledLink>
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