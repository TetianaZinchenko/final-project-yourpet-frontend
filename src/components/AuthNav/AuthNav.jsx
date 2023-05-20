import { Link } from 'react-router-dom'
import{Button,BtnContain} from './Auth.styled'
// import{IoPawOutline} from "react-icons"

export const AuthNav = () => {
  return (
    <BtnContain>
      <Link to="/register">
        <Button type='button'>Registration</Button>
      </Link>
      <Link  to="/login">
         <Button type='button'>Log IN </Button>
      </Link>
    </BtnContain>
  );
};