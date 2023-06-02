import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import bg_mobile from '../../images/bg_page/mobile-bg-page_1x.png';
import bg_tablet from '../../images/bg_page/tablet-bg-page_1x.png';
import bg_desktop from '../../images/bg_page/desc-bg-page_1x.png';
import { NavLink } from 'react-router-dom';

export const FormContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 58px);
  background-image: url(${bg_mobile});
  background-repeat: space repeat;
  background-size: contain;
  background-position-y: center;
  padding-top: 20px;

  @media (min-width: 768px) {
    background-image: url(${bg_tablet});
    /* padding-top: 92px; */
    padding-top: 60px;
    padding-bottom: 268px;
    min-height: calc(100vh - 64px);
  }
  @media (min-width: 1280px) {
    background-image: url(${bg_desktop});
    /* padding-top: 82px; */
    padding-top: 40px;
    padding-bottom: 147px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 27px;
    font-weight: 500;
  }
`;

export const InputTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    font-weight: 500;
  }
`;

export const Forma = styled(Form)`
  position: relative;
  width: 280px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
  padding: 20px 8px;
  background-color: #fff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  /* margin: 92px auto; */
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 458px;
    min-height: 542px;
    padding: 20px 32px;
    border-radius: 40px;
    /* margin: 82px auto; */
  }
  @media (min-width: 1280px) {
    width: 458px;

    padding: 20px 32px;
  }
  > div {
    position: relative;
    //  margin-bottom: 15px;
  }
  :last-child {
    font-size: 12px;
  }
`;

export const Stepper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  width: calc(100% / 3);
  max-width: 120px;
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const StepLine = styled.div`
  background-color: #cce4fb;
  height: 8px;
  border-radius: 8px;
  max-width: 120px;
  margin-top: 12px;
`;

export const Input = styled(Field)`
  width: 100%;
  font-size: 14px;
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background: white;
  border: 1px solid #54adff;
  border-radius: 50px;
  margin-bottom: 7px;
  &:focus,
  &:hover {
    outline: none;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    padding: 14px 0 13px 32px;
  }
  @media (min-width: 1280px) {
    width: 394px;
  }
`;

export const Option = styled.label`
  display: inline-block;
  border-radius: 40px;
  background-color: #cce4fb;
  padding: 8px 16px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 0px;
  @media (max-width: 767px) {
    margin-top: 24px;
    gap: 20px;
    flex-direction: column-reverse;
  }
`;

export const CancelButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 9px 0px;
  background: transparent;
  border: none;
  text-decoration: none;
  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`;

export const PrevStepButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 9px 0px;
  background: transparent;
  border: none;
  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`;

export const NextStepButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 9px 0px;
  background: #54adff;
  border-radius: 40px;
  border: none;
  @media (min-width: 768px) {
    width: 248px;
  }
`;

export const ButtonText = styled.span`
  margin-right: 12px;
  font-family: 'Manrope';
  font-style: normal;
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
`;

export const ErrBox = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: -8px;
  left: 15px;
  color: red;
  font-size: 11px;
  @media (min-width: 768px) {
    bottom: -12px;
    font-size: 14px;
    left: 33px;
  }
`;
