import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const Title = styled.h1`
padding-top: 40px;
font-family: ${theme.fonts.main};
font-weight: ${theme.fontWeights.bold};
font-size: ${theme.fontSizes[5]}px;
line-height: 33px;
text-align: center;

@media screen and (${theme.media.tablet}) {
  padding-top: 80px;
  font-size: ${theme.fontSizes[9]}px;
  line-height: 66px;
  }
`

export const Form = styled.form`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  @media screen and (${theme.media.mobile}) {
    width: 280px;
    margin-top: 24px;
  }

  @media screen and (${theme.media.tablet}) {
    width: 608px;
    margin-top: 43px;
  }
`;
export const Input = styled.input`
  width: 100%;
  max-height: 44px;

  @media screen and (${theme.media.mobile}) {
    padding-top: 14px;
    padding-bottom: 13px;
    padding-left: 20px;
    font-size: ${theme.fontSizes[1]}px;
  }

  @media screen and (${theme.media.tablet}) {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    font-size: ${theme.fontSizes[4]}px;
  }

  font-family: ${theme.fonts.second};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.grey};
  letter-spacing: 0.04em;

  background-color: #fff;
  border-radius: 24px;
  border: none;
  box-shadow: ${theme.shadows.defaultShadow};
  outline: none;

  &:focus,
  &:hover {
    box-shadow: ${theme.shadows.hoverShadow};
  }

  &::placeholder {
    font-family: ${theme.fonts.second};
  }
`;

export const SubmitBtn = styled.button`
  position: absolute;
  padding: 0;

  @media screen and (${theme.media.mobile}) {
    right: 12px;
  }

  @media screen and (${theme.media.tablet}) {
    right: 20px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  transform: ${({ query }) => query && 'translateX(-27px)'};

  & svg {
    fill: ${theme.colors.blue};
  }
`;

export const ClearUpBtn = styled(SubmitBtn)`
  /* right: 13px; */

  transform: translateX(0);
  opacity: ${({ query }) => (query ? 1 : 0)};

  & svg {
    stroke: ${theme.colors.yellow};
  }
`;

