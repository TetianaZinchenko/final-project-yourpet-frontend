import React, { useState, Link } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperations';
import { Navigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import Modal from '../../Modal';
import logOutIcon from '../../../icons/logout.svg';
import logOutIconWhite from '../../../icons/logoutWithe.svg';
import styles from './Logout.module.css';

export const Logout = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  // const history = useHistory();

  const handleLogout = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleConfirmLogout = async () => {
    try {
      await dispatch(logOut());
      console.log('qqqqqqqqq');
      // Redirect to the main page after logout
      return <Link to="/main">Go to User Page</Link>;
    } catch (error) {
      // Handle error if logout fails
      console.error('Error logging out:', error);
      // Add code to display an error message or perform other actions
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
