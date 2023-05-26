import pawprint from '../../../icons/pawprintWithe.svg';
import { BtnContain, LoginLink, RegisterLink, SVG } from './AuthNav.styled';


export const AuthNav = ({ handleClose }) => {
  return (
    <BtnContain>
      <LoginLink to="/login" onClick={handleClose}>
        Log IN
        <SVG src={pawprint} alt="" width={24} height={24} />
      </LoginLink>
      <RegisterLink to="/register" onClick={handleClose}>
        Registration
      </RegisterLink>
    </BtnContain>
  );
};