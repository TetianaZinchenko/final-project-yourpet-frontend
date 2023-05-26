import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme/theme';

export const NavContain = styled.div`
  overflow: hidden;
  background-color: ${theme.colors.background};
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s;

  &.active {
    top: 0;
  }
`;

export const MenuMobileHeader = styled.div`
   display: flex;
  padding: 38px 37px;
  align-items: center;
  justify-content: space-between;

   @media (min-width: 768px) {
    padding: 20px 30px;
    margin-bottom: 0;
  }
`
export const MobileBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 37px;
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
