import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserContainNav = styled.nav`
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const StyledLink = styled(NavLink)`
  &:hover,
  &:focus {
  }
  &.active {
  }
`;