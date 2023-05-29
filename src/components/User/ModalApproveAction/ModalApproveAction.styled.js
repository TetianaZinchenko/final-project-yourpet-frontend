import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { fonts, fontSizes, fontWeights, colors, media } = theme;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backdrop};
`;

export const ModalWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 92px;
  left: 50%;
  transform: translateX(-50%);

  width: 280px;
  height: 287px;
  padding: 68px 16px 60px;

  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.defaultShadow};
  border-radius: 20px;

  @media screen and (${media.mobile}) {
    width: 280px;
  }
  @media screen and (${media.tablet}) {
    top: 148px;

    padding: 60px 129px;
    width: 608px;
    height: 354px;
  }
  @media screen and (${media.desktop}) {
    top: 112px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  width: 24px;
  height: 24px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: ${colors.transparent};

  fill: none;
  stroke: ${colors.blue};

  @media screen and ${media.tablet} {
    right: 24px;
    top: 24px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  text-align: center;

  font-family: ${fonts.main};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes[6]}px;
  line-height: 38px;
  letter-spacing: -0.01em;

  color: ${colors.black};

  @media screen and (${media.tablet}) {
    margin-bottom: 48px;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (${media.tablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;

export const BtnApprove = styled.button`
  width: 100%;
  height: 40px;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background: ${colors.blue};
  border-radius: 40px;
  border: none;

  font-family: ${fonts.main};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes[2]}px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: ${colors.background};

  :hover,
  :focus {
    background: ${colors.blueGradient};
  }

  @media screen and ${media.tablet} {
    width: 129px;
  }
`;

export const BtnCancel = styled.button`
  width: 100%;
  height: 38px;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background: ${colors.transparent};
  border-radius: 40px;
  border: 2px solid ${colors.blue};

  font-family: ${fonts.main};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes[2]}px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: ${colors.blue};

  :hover,
  :focus {
    background: ${colors.blueGradient};
  }

  @media screen and ${media.tablet} {
    width: 129px;
  }
`;
