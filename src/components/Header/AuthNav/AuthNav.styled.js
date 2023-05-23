import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../theme/theme';

export const BtnContain = styled.div`
  
   display: flex;
 justify-content: center;
  align-items: center;
  gap: 12px;

  // @media:${theme.media.tablet}  {
  //   display: flex;
  //   align-items: center;
  //    gap:20px
  // flex-direction: row;
  //   justify-content: flex-end;
    
  }
`;
export const RegisterLink = styled(NavLink)`
  position: relative;
  z-index: 1000;
 display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 142px;
  height: 38px;
 padding: 8px, 20px, 8px, 20px
  font-size: ${theme.fontSizes[2]}px;
  font-family: ${theme.fonts.main};
font-style: normal;
font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.yellow};
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.yellow};
  border-radius: 40px;
  cursor:pointer;
`;

export const LoginLink = styled(NavLink)`
  position: relative;
  z-index: 1000;
  margin-top: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 165px;
  height: 40px;
  font-size: ${theme.fontSizes[2]}px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.yellow};
  border-radius: 40px;
  cursor: pointer;
  font-weight: ${theme.fontWeights.bold};
  font-family: ${theme.fonts.main};

    &:hover,
  &:focus {
border: ${theme.colors.white}
      color: ${theme.colors.yellow};
  }

  &.active {
    
     color: ${theme.colors.yellow};
  }

  @media screen and (min-width: 767px) {
    margin-top: 0;
  }
`;
export const SVG = styled.svg`
  margin-left: 8px;
  // fill:${theme.colors.white};
  fill: red;
`;
