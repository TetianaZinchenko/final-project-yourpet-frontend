import styled from '@emotion/styled';
// import { theme } from 'theme/theme';

export const MobileBtn = styled.div`
display:none;

  @media ((min-width: 320px) and (max-width: 1200px)) {
    display: block;
    top: 25px;
    right: 25px;
    position: absolute;
    cursor: pointer;
    z-index: 100;
  }
 
`;
