import React from 'react';

function CustomIcon({ name }) {
  const iconPath = require(`../icons/${name}.svg`).default;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d={iconPath} />
    </svg>
  );
}

export default CustomIcon;

// import CustomIcon from '../components/CustomIcon';
// <CustomIcon name="iconName" />;
