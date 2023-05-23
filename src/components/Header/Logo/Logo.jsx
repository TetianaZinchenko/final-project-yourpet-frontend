import React from 'react';
import LogoImg from '../../../images/logo.png';
// import LogoImgSm from '../../../images/mobile' вставити картинку після оновлення main
import { Link } from 'react-router-dom';
import { Img, LogoWrapper } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/main">
        <Img src={LogoImg} alt="logo" width={162} height={28}/>
        {/* <ImgSm src={LogoImg} alt="logo" width={116} height={20}/> */}
      </Link>
    </LogoWrapper>
  );
};
