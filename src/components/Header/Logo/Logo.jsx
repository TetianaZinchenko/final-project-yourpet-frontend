import React from 'react';

// import LogoImgSm from '../../../images/mobile' вставити картинку після оновлення main

import { Link } from 'react-router-dom';
import { LogoWrapper } from './Logo.styled';
// import { Img } from './Logo.styled';

// import LogoImg from '../../../images/logo_desktop.png';

export const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/main">
        {/* <Img src={LogoImg} alt="logo" width={162} height={28}/> */}
        {/* <ImgSm src={LogoImg} alt="logo" width={116} height={20}/> */}
      </Link>
    </LogoWrapper>
  );
  // return <Link to="/main">{/* <img src={LogoImg} alt="logo" /> */}</Link>;
};
