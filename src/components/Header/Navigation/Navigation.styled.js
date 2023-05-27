import styled from '@emotion/styled';
import { theme } from 'theme/theme';


export const MobileBtn = styled.div`
  display: none;

  @media ((min-width: 320px) and (max-width: 767px)) {
    display: block;
    top: 25px;
    right: 25px;
    position: absolute;
    cursor: pointer;
    z-index: 100;  
    color:${theme.colors.yellow};
      
  
  }
  @media ((min-width: 768px) and (max-width: 1279px)) {
    display: block;
    right: 16px;
    top: 30px;
    position: absolute;
    cursor: pointer;
    z-index: 100;
   
    color:${theme.colors.yellow}  
    }
`;
