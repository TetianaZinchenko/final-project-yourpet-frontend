import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const HeaderContain = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and(${theme.media.tablet}) {
    padding: 0 32px;
  }

  @media screen and(${theme.media.desktop}) {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 48px;
  }

  /* display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 48px;
  padding: 0 16px; */
`;
