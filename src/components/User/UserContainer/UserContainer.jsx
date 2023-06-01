import { UserData } from '../UserData/UserData';
import { Logout } from '../Logout/Logout';
import styles from './UserContainer.module.css';

export const UserContainer = () => {
  return (
    <div>
      <h1 className={styles.title}>My information:</h1>
      <div className={styles.container}>
        <UserData></UserData>
        <Logout></Logout>
      </div>
    </div>
  );
};
