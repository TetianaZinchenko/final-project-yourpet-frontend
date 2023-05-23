import pawprint from '../../../icons/pawprintWithe.svg';
import { BtnContain, LoginLink, RegisterLink, SVG } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <BtnContain>
      <LoginLink to="/login">
        Log IN
        <SVG src={pawprint} alt="" width={24} height={24} />
      </LoginLink>
      <RegisterLink to="/register">Registration</RegisterLink>
    </BtnContain>
  );
};
