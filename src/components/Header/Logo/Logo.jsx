import React from 'react';

import { LogoImg, LogoWrapper } from './Logo.styled';
import logo from 'images/logo.svg';

export const Logo = () => {
  return (
    <LogoWrapper to="/main">
      <LogoImg src={logo} alt="logo" width="168" height="28"></LogoImg>
    </LogoWrapper>
  );
};
