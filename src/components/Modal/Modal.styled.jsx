import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { media } = theme;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backdrop};
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 92px;
  left: 50%;
  transform: translateX(-50%);

  width: 280px;
  height: 287px;
  padding: 68px 16px 60px;

  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.defaultShadow};
  border-radius: 20px;

  @media screen and ${media.mobile}) {
    width: 280px;
  }
  @media screen and ${media.tablet} {
    top: 148px;

    padding: 60px 129px;
    width: 608px;
    height: 354px;
  }
  @media screen and ${media.desktop} {
    top: 112px;
  }
`;
