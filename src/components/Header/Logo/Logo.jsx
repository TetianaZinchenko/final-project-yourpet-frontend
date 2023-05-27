import React from 'react';

import { LogoImg, LogoWrapper } from './Logo.styled';
import logo from 'images/logo.svg';

export const Logo = ({ handleClose }) => {
  return (
    <LogoWrapper to="/main" onClick={handleClose}>
      <LogoImg src={logo} alt="logo" width="162" height="28"></LogoImg>
    </LogoWrapper>
  );
};
