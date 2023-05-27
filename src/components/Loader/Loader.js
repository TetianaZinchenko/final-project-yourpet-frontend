import React from 'react';
import styles from './Loader.module.css'; // Путь к файлу стилей для лоадера

const Loader = () => {
  return (
    <div className={styles.wheelAndHamster}>
      <div className={styles.wheel}></div>
      <div className={styles.hamster}>
        <div className={styles.hamsterBody}>
          <div className={styles.hamsterHead}>
            <div className={styles.hamsterEar}></div>
            <div className={styles.hamsterEye}></div>
            <div className={styles.hamsterNose}></div>
          </div>
          <div
            className={`${styles.hamsterLimb} ${styles.hamsterLimbFR}`}
          ></div>
          <div
            className={`${styles.hamsterLimb} ${styles.hamsterLimbFL}`}
          ></div>
          <div
            className={`${styles.hamsterLimb} ${styles.hamsterLimbBR}`}
          ></div>
          <div
            className={`${styles.hamsterLimb} ${styles.hamsterLimbBL}`}
          ></div>
          <div className={styles.hamsterTail}></div>
        </div>
      </div>
      <div className={styles.spoke}></div>
    </div>
  );
};

export default Loader;
