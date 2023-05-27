
import { NavContain, LinksWrapper,LinkItem,StyledLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavContain>
      <LinksWrapper>
        <LinkItem>
          <StyledLink to="/news">News</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/notices/sell">Find pet</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to="/friends">Our friends</StyledLink>
        </LinkItem>
      </LinksWrapper>
    </NavContain>
  );
};
