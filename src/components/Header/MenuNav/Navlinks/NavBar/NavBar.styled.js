import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme/theme';

export const NavContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 1em;
  height: 100%;
  gap: 40px;
`;

export const LinkItem = styled.li`
  height: 100%;
  font-size: ${theme.fontSizes[4]}px;
  font-weight: ${theme.fontWeights.medium};
  font-family: ${theme.fonts.main};
  color: ${theme.colors.black};
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;

  &:hover,
  &:focus {
      color: ${theme.colors.yellow};
  }

  &.active {
    
     color: ${theme.colors.yellow};
  }
`;
