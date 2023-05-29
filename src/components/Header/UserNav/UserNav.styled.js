import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme/theme';

export const UserContainNav = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right:42px;
`;

export const UserImage = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px ;
`;

export const UserName = styled.span`
  color: #FFC107;
  font-family:${theme.fonts.main};
  font-size:${theme.fontSizes[2]}px;
  font-weight:${theme.fontWeights.medium};
  
`;