import React from 'react';
import LogoImg from '../../pictures/logo123.png'
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/main">
      <img src={LogoImg} alt="logo" />
    </Link>
   
  );
};
