import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import bg_mobile from '../../images/bg_page/mobile-bg-page_1x.png';
import bg_tablet from '../../images/bg_page/tablet-bg-page_1x.png';
import bg_desktop from '../../images/bg_page/desc-bg-page_1x.png';

export const FormContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 58px);
  background-image: url(${bg_mobile});
  background-repeat: space repeat;
  background-size: contain;
  background-position-y: center;

  @media (min-width: 768px) {
    background-image: url(${bg_tablet});
    padding-top: 92px;
    padding-bottom: 268px;
    min-height: calc(100vh - 64px);
  }
  @media (min-width: 1280px) {
    background-image: url(${bg_desktop});
    padding-top: 82px;
    padding-bottom: 147px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 36px;
    font-weight: 500;
  }
`;

export const Forma = styled(Form)`
  position: relative;
  width: 280px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  padding: 40px 10px;
  background-color: #fff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  margin: 92px auto;

  @media (min-width: 768px) {
    width: 608px;
    padding: 60px 0 40px 0;
    margin: 82px auto;
  }
  @media (min-width: 1280px) {
    width: 458px;
    min-height: 548px;
    padding: 20px 32px;
  }
  > div {
    position: relative;
    margin-bottom: 30px;
  }
  :last-child {
    font-size: 12px;
  }
`;

export const Stepper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Step = styled.div`
  width: calc(100% / 3);
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
`;

export const StepLine = styled.div`
  background-color: #cce4fb;
  height: 8px;
  border-radius: 8px;
`;

export const ShowPassword = styled.span`
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

export const Input = styled(Field)`
  width: 250px;
  font-size: 14px;
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background: white;
  border: 1px solid #54adff;
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
    width: 394px;
  }
`;

export const Option = styled.label`
  border-radius: 40px;
  background-color: #cce4fb;
  padding: 8px 16px;
  margin-bottom: 30px;
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
  bottom: -4px;
  left: 15px;
  color: red;
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
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

export const StyledLink = styled.a`
  color: #54adff;
  text-decoration: none;
  :hover,
  :focus {
    color: blue;
  }
`;
