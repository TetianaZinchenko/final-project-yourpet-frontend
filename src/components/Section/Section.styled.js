import styled from "@emotion/styled";
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



export const SectionStyle = styled.section`
    width: 100vw;
    background-color: ${props => props.theme.colors.background};

    ${props => props.$bg && `
  width: 100vw;  
  height: calc(100vh - 48px);
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  background-image: url(${mobile1x});

  background-color: ${props => props.theme.colors.background};

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
    `}
`

export const Container = styled.div`
  margin: 0 auto;
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 786px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 20px;
  }
`;
