import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { media } = theme;

export const List = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media screen and ${media.desktop} {
    gap: 24px;
  }
`;
