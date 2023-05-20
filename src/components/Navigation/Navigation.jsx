import { NavBar } from 'components/NavBar/NavBar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavContain, MobileBtn } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <NavContain>
        <NavBar />
        <AuthNav />
        <MobileBtn>
          <AiOutlineMenu size={24} />
          <AiOutlineClose size={24} color="red" />
        </MobileBtn>
      </NavContain>
    </>
  );
};
