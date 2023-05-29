import { UserData } from '../UserData/UserData';
import { Logout } from '../Logout/Logout';
import styles from './UserContainer.module.css';

export const UserContainer = () => {
  return (
    <>
      <div className={styles.container}>
        <UserData></UserData>
        <Logout></Logout>
      </div>
    </>
  );
};
