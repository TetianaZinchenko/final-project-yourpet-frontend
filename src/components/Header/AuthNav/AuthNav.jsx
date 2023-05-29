import pawprint from '../../../icons/pawprintWithe.svg';
import { Link } from 'react-router-dom';
import { BtnContain, LoginBtn, RegisterBtn, SVG } from './AuthNav.styled';

export const AuthNav = ({ handleClose }) => {
  return (
    <BtnContain>
      <Link to="/login" onClick={handleClose}>
        <LoginBtn type="button">
          Log IN
          <SVG src={pawprint} alt="" width={24} height={24} />
        </LoginBtn>
      </Link>
      <Link to="/register" onClick={handleClose}>
        <RegisterBtn type="button"> Registration</RegisterBtn>
      </Link>
    </BtnContain>
  );
};
