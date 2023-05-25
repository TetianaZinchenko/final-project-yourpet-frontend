import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UserContainNav = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const UserImage = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px ;
`;

export const UserNavName = styled.span`
  color: #FFC107;
`;