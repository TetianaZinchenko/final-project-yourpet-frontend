import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'formik';
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

export const FormContainer = styled.div`
  width: 100vw;
  min-height: calc(100vh - 48px);
  margin: 0 auto;
  padding-top: 92px;
  background-image: url(${mobile1x});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center top;

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
  @media (min-width: 768px) {
    padding-top: 92px;
    padding-bottom: 268px;
    min-height: calc(100vh - 64px);
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
  @media (min-width: 1280px) {
    padding-top: 82px;
    padding-bottom: 147px;
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
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
  margin-top: 0;
  @media (min-width: 768px) {
    font-size: 36px;
    font-weight: 500;
  }
`;
export const Forma = styled(Form)`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 10px;
  background-color: #fff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 608px;
    padding: 60px 0 40px 0;
    margin-left: 80px;
  }
  @media (min-width: 1280px) {
    width: 618px;
    padding: 60px 0 60px 0;
    margin-left: 300px;
  }
  > div {
    position: relative;
  }
  :last-child {
    font-size: 12px;
  }
`;

export const ShowPassword = styled.span`
  display: inline-block;
  position: absolute;
  width: 25px;
  height: 25px;
  right: 15px;
  top: 13px;
  fill: white;
  stroke: ${props =>
    props.error
      ? props.theme.colors.red
      : props.valid
      ? props.theme.colors.green
      : props.theme.colors.blue};

  svg {
    width: inherit;
    height: inherit;
  }
`;

export const Input = styled(Field)`
  width: 250px;
  font-size: 14px;
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background: white;
  border: 1px solid;
  border-color: ${props =>
    props.error
      ? props.theme.colors.red
      : props.valid
      ? props.theme.colors.green
      : props.theme.colors.blue};
  border-radius: 50px;
  margin-bottom: 16px;
  &:focus,
  &:hover {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 448px;
    font-size: 18px;
    padding: 14px 0 13px 32px;
  }
  @media (min-width: 1280px) {
    width: 458px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: #fff;
  background: #54adff;
  border: 1px solid #54adff;
  border-radius: 50px;
  margin: 24px 0 40px 0;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms;
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  :disabled:before {
    transform: none;
    transition: none;
  }
  @media (min-width: 768px) {
    width: 458px;
    font-size: 20px;
  }
`;

export const ErrBox = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: 0;
  left: 15px;
  color: #f43f5e;
  font-size: 14px;
  @media (min-width: 768px) {
    left: 33px;
  }
`;
export const AppBox = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: 0;
  left: 15px;
  color: #00c3ad;
  font-size: 14px;
  @media (min-width: 768px) {
    left: 33px;
  }
`;

export const ClearInput = styled.span`
  display: inline-block;
  position: absolute;
  width: 25px;
  height: 25px;
  right: 15px;
  top: 13px;
  color: #54adff;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;
export const StyledLink = styled(NavLink)`
  color: #54adff;
  text-decoration: none;
  :hover,
  :focus {
    color: blue;
  }
`;

// export const GoogleLink = styled.a`
//   display: flex;
//   align-items: center;
//   color: #54adff;
//   text-decoration: none;
//   :hover,
//   :focus {
//     color: blue;
//   }
// `;
