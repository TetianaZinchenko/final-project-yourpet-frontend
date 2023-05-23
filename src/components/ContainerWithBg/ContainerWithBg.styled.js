import styled from '@emotion/styled';
import {
  desc1x,
  desc2x,
  desc3x,
  tablet1x,
  tablet2x,
  tablet3x,
  mobile1x,
  mobile2x,
  mobile3x,
} from '../../images/bg_page/index';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  background-image: url(${mobile1x});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${props => props.theme.colors.background};
  margin: 0 auto;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${mobile2x});
  }

  @media screen and (min-device-pixel-ratio: 3),
    screen and (min-resolution: 288dpi),
    screen and (min-resolution: 3dppx) {
    background-image: url(${mobile3x});
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
    background-image: url(${tablet1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${tablet2x});
    }

    @media screen and (min-device-pixel-ratio: 3),
      screen and (min-resolution: 288dpi),
      screen and (min-resolution: 3dppx) {
      background-image: url(${tablet3x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desc1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${desc2x});
    }

    @media screen and (min-device-pixel-ratio: 3),
      screen and (min-resolution: 288dpi),
      screen and (min-resolution: 3dppx) {
      background-image: url(${desc3x});
    }
  }
`;
