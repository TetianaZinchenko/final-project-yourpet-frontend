import styled from '@emotion/styled';
import { theme } from '../../../theme/theme';

export const BtnContain = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 767px) {
    display: block;
    margin-top: 40px;
  }
   @media ((min-width: 768px) and (max-width: 1279px)){
    margin-right:40px;
   }
 
`;

export const RegisterBtn = styled.button`
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes[2]}px;
  font-family: ${theme.fonts.main};
  font-style: normal;
  width: 165px;
  height: 40px;
  padding: 8px, 20px, 8px, 20px;
  line-height: 22px;
  color: ${theme.colors.yellow};
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.yellow};
  border-radius: 40px;
  box-shadow: ${theme.shadows.defaultShadow};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.background};
    background: none;
    background-color: ${theme.colors.yellow};
    box-shadow: ${theme.shadows.hoverShadow};
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes[2]}px;
  font-style: normal;
  width: 165px;
  height: 40px;
  padding: 8px, 20px, 8px, 20px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.yellow};
  border: 2px solid ${theme.colors.yellow};
  border-radius: 40px;
  cursor: pointer;
  box-shadow: ${theme.shadows.defaultShadow};

  &:hover {
    color: ${theme.colors.white};
    background: none;
    background-color: ${theme.colors.yellow};
    box-shadow: ${theme.shadows.hoverShadow};
  }
    @media (max-width: 767px) {
    margin: 0 0 10px;
    height: 40px;
  }
`;
export const SVG = styled.img`
  margin-left: 8px;
`;
