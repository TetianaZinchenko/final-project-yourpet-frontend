import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { fonts, fontSizes, fontWeights, colors, media } = theme;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  height: 40px;
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
    color: ${colors.background};
    border: none;
  }

  @media screen and ${media.tablet} {
    width: 129px;
  }
`;
