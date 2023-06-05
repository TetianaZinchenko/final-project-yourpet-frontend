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
`;
