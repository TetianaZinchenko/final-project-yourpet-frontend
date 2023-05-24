import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {theme} from 'theme/theme';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (min-width: ${theme.media.tablet}) {
    gap: 12px;
  }
`;

export const Button = styled(NavLink)`
  position: relative;

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  text-decoration: none;

  color: ${theme.colors.blue};

  background-color: ${theme.colors.blueLight};
  border: none;
  border-radius: 40px;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: ${theme.colors.white};

    background-color: ${theme.colors.blue};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: ${theme.colors.blueGradient};
    border-radius: 40px;
    opacity: 0;

    z-index: -1;

    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.white};

    background-color: transparent;
  }
`;