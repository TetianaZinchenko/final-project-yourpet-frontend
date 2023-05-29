import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';
import { theme } from 'theme/theme';
const { fonts, fontSizes, fontWeights, colors, shadows, media } = theme;

export const Btn = styled.button`
  position: fixed;
  z-index: 999;
  top: 50%;
  translate: 0 -50%;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: none;
  text-decoration: none;
  background: ${colors.blue};
  box-shadow: ${shadows.defaultShadow};

  font-family: ${fonts.main};
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes[0]}px;
  line-height: 16px;

  color: ${colors.white};

  svg {
    width: 24px;
    height: 24px;
  }

  :hover {
    background: ${colors.blueGradient};
  }

  @media screen and (${media.tablet}) {
    position: static;
    /* margin-top: 20px; */
    /* margin-right: 32px; */
    margin-left: auto;
    gap: 8px;
    flex-direction: row;
    width: 130px;
    background: ${colors.blue};
    border-radius: 40px;
    height: 40px;

    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes[2]}px;
    line-height: 22px;
  }
`;
