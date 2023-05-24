import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../theme/theme';

export const BtnContain = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
    align-items: center;
  }
@media  (max-width: 1279px) {
display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
  

  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
`;

export const RegisterLink = styled(NavLink)`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 165px;
  height: 40px;
  padding: 8px, 20px, 8px, 20px;
  font-size: ${theme.fontSizes[2]}px;
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.yellow};
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.yellow};
  border-radius: 40px;
  cursor: pointer;

  &:hover,
  &:focus {
    /* background-color: ${theme.colors.yellow}; */
  }

  &.active {
    /* color: ${theme.colors.white}; */
  }

  @media screen and(${theme.media.desktop}) {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 142px;
    height: 38px;
    padding: 8px, 20px, 8px, 20px;
    font-size: ${theme.fontSizes[2]}px;
    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.yellow};
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.yellow};
    border-radius: 40px;
    cursor: pointer;
  }
`;

export const LoginLink = styled(NavLink)`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 165px;
  height: 40px;
  padding: 8px, 20px, 8px, 20px;
  font-size: ${theme.fontSizes[2]}px;
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.yellow};
  border: 2px solid ${theme.colors.yellow};
  border-radius: 40px;
  cursor: pointer;
  &:hover,
  &:focus {
  }

  &.active {
  }

  @media screen and(${theme.media.desktop}) {
    position: relative;
    z-index: 10;
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
      border: ${theme.colors.white};
      color: ${theme.colors.yellow};
    }

    &.active {
      color: ${theme.colors.yellow};
    }
  }
`;
export const SVG = styled.img`
  margin-left: 8px;
`;
