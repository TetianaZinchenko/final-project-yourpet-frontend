import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { media } = theme;

export const Container = styled.div`
  margin-top: 60px;
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
    gap: 31px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 704px;
  }

  @media screen and (${media.desktop}) {
    width: 1248px;
  }
`;

export const Notification = styled.div`
  font-size: 24px;
  color: black;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
