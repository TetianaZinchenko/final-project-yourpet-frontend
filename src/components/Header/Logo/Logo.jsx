import React from 'react';
import { Link } from 'react-router-dom';
import { LogoWrapper } from './Logo.styled';
import { ImgDesk, } from './Logo.styled';

import LogoDesk from '../../../images/logo_desktop.png';
// import LogoTab from '../../../images/logo_tablet.png';
// import LogoMob from '../../../images/logo_mobile.png';

export const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/main">
        {/* <ImgMob src={LogoMob} alt="logo" width={116} height={20} />
        <ImgTab src={LogoTab} alt="logo" width={162} height={28} /> */}
        <ImgDesk src={LogoDesk} alt="logo" width={162} height={28} />
      </Link>
    </LogoWrapper>
  );
};
