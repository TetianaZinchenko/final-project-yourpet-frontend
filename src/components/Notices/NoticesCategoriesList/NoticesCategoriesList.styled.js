import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { media } = theme;

export const Container = styled.div`
  position: relative;
`;

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: flex-start;
  align-items: center;

  @media screen and (${media.tablet}) {
    gap: 32px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 704px;
  }

  @media screen and (${media.desktop}) {
    width: 1248px;
  }
`;
