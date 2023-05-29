import logOutIcon from '../../../icons/logout.svg';
import styles from './Logout.module.css';
export const Logout = () => {
  return (
    <>
      <button className={styles.button}>
        <img src={logOutIcon} alt="" /> Log Out
      </button>
    </>
  );
};
