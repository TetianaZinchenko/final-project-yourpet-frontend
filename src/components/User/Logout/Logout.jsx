import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperations';
import Modal from '../../Modal';
import logOutIcon from '../../../icons/logout.svg';
import logOutIconWhite from '../../../icons/logoutWithe.svg';
import styles from './Logout.module.css';

export const Logout = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleConfirmLogout = async () => {
    try {
      await dispatch(logOut());
      // Дополнительный код для выполнения дополнительных действий после выхода из системы
      // Переход на страницу main
      return <Navigate to="/main" replace />;
    } catch (error) {
      // Обработка ошибок, если не удалось выполнить выход из системы
      console.error('Error logging out:', error);
      // Дополнительный код для отображения сообщения об ошибке или выполнения других действий
    }
  };

  return (
    <>
      <button className={styles.buttonLogOut} onClick={handleLogout}>
        <img src={logOutIcon} alt="" /> Log Out
      </button>

      {modalVisible && (
        <Modal onClick={handleModalClose}>
          <h1 className={styles.h1}>Already leaving?</h1>
          <div className={styles.div}>
            <button className={styles.buttonCancel} onClick={handleModalClose}>
              Cancel
            </button>
            <button className={styles.buttonYes} onClick={handleConfirmLogout}>
              Yes
              <img src={logOutIconWhite} alt="" />
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};
