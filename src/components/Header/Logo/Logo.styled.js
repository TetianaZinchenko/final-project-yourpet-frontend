import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { theme } from 'theme/theme';
const { media } = theme;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  @media screen and (${media.tablet}) {
    margin-right: auto;
  }

  @media screen and (${media.desktop}) {
    margin-right: 0;
  }
`;

export const LogoImg = styled.img`
  max-width: 116px;
  height: 20px;

  @media screen and (${media.tablet}) {
    max-width: 162px;
    height: 28px;
    display: inherit;
  }
`;
