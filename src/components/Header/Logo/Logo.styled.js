import styled from '@emotion/styled';
// import { theme } from '../../../theme/theme';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgDesk = styled.img`
  max-width: 116px;
  height: 20px;
  @media screen and (min-width: 768px) {
    max-width: 168px;
    height: 28px;
    display: inherit;
  }
`;
