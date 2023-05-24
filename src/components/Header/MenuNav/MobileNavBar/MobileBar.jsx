import {
  NavContain,
  LinksWrapper,
  LinkItem,
  StyledLink,
} from './MobileBar.styled';
import { AuthNav } from 'components/Header/AuthNav/AuthNav';

export const MobileNavBar = () => {
  return (
    <NavContain>
      <LinksWrapper>
        <AuthNav />
        <LinkItem>
          <StyledLink to="/news">News</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/notices">Find pet</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/friends">Our friends</StyledLink>
        </LinkItem>
      </LinksWrapper>
    </NavContain>
  );
};
