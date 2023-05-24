import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { fonts, fontSizes, fontWeights, colors, media } = theme;

export const TitleCongrats = styled.h2`
  margin-bottom: 24px;
  text-align: center;

  font-family: ${fonts.main};
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes[5]}px;
  line-height: 33px;
  letter-spacing: 0.04em;

  color: ${colors.black};

  @media screen and ${media.tablet} {
    margin-bottom: 52px;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const TextCongrats = styled.p`
  margin-bottom: 40px;
  text-align: center;

  font-family: ${fonts.main};
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes[2]}px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: ${colors.black};
  white-space: nowrap;

  @media screen and ${media.tablet} {
    margin-bottom: 60px;
    font-size: ${fontSizes[5]}px;
    line-height: 33px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: ${colors.transparent};

  @media screen and ${media.tablet} {
    right: 24px;
    top: 24px;
  }
`;

export const BtnCongrats = styled.button`
  width: 100%;
  height: 40px;
  margin: 0 auto;

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
    width: 248px;
  }
`;
