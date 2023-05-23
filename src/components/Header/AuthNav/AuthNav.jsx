import icons from '../../../icons/pawprint.svg'
import{BtnContain, LoginLink,RegisterLink,SVG} from './AuthNav.styled'


export const AuthNav = () => {
  return (
    <BtnContain>
      <LoginLink to="/login">Log IN
         <SVG width={24} height={24}>
          <use href={icons}></use>
        </SVG>
       </LoginLink>
      <RegisterLink to="/register">
        Registration
      </RegisterLink>
    </BtnContain>
  );
};