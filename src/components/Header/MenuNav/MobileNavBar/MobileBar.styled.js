import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme/theme';

export const NavContain = styled.div`
  height: calc(100vh - 48px);
  position: absolute;
  margin-top: 20px;
  left: 0;
  width: 100vw;
  top: 48px;
  z-index: 10;

  background-color: ${theme.colors.background};
`;
export const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100;
  height: 100;

  margin: 0;
  padding: 0;
  gap: 20px;
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
