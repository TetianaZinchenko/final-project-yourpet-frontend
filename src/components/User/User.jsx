import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { PetsData } from './PetsData/PetsData';
import { UserContainer } from './UserContainer/UserContainer';
import { ModalCongrats } from './ModalCongrats/ModalCongrats';
import { getUser } from '../../redux/auth/authSelectors';

export const User = () => {
  const [modal, setModal] = useState(false);
  const timeData = useSelector(getUser);

  useEffect(() => {
    const createdAt = new Date(timeData.createdAt);
    const updatedAt = new Date();

    const interval = updatedAt - createdAt;
    if (interval < 60000) {
      setModal(true);
    }
  }, [timeData.createdAt, timeData.updatedAt]);

  return (
    <>
      <UserContainer></UserContainer>
      <PetsData />
      {modal && <ModalCongrats />}{' '}
    </>
  );
};
