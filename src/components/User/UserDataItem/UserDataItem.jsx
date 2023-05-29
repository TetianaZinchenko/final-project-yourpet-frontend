import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../redux/auth/authOperations';
import { selectUser, selectAuth } from '../../../redux/auth/authSelectors';
import chekIcon from '../../../icons/check.svg';
import editIcon from '../../../icons/edit-2.svg';
import styles from './UserDataItem.module.css';

const EditableField = ({ label, initialValue, isActive, setActiveField }) => {
  const [value, setValue] = useState(initialValue);

  const handleEdit = () => {
    setActiveField();
  };

  const handleSave = () => {
    // Определите обновление данных пользователя
    setActiveField(false);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      {isActive ? (
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className={styles.input}
          />
          <button onClick={handleSave} className={styles.buttonChek}>
            <img src={chekIcon} alt="" />
          </button>
        </div>
      ) : (
        <div className={styles.input}>
          <span>{value}</span>
          <button onClick={handleEdit} className={styles.buttonEdit}>
            <img src={editIcon} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export const UserDataItem = () => {
  const [activeField, setActiveField] = useState(null);
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  console.log(auth._id);
  console.log(user.user);

  useEffect(() => {
    dispatch(getUser(auth._id)); // Запрос данных пользователя при первой загрузке компонента
  }, [dispatch, auth._id]);

  const handleSetActiveField = field => {
    setActiveField(activeField === field ? null : field);
  };

  return (
    <div className={styles.div}>
      <div className={styles.containerInfo}>
        <p className={styles.label}>Name:</p>
        <EditableField
          label="Name"
          initialValue={user.user.name}
          isActive={activeField === 'name'}
          setActiveField={() => handleSetActiveField('name')}
        />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.label}>Email:</p>
        <EditableField
          label="Email"
          initialValue={user.user.email}
          isActive={activeField === 'email'}
          setActiveField={() => handleSetActiveField('email')}
        />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.label}>Birthday:</p>
        <EditableField
          label="Birthday"
          initialValue={user.user.birthday}
          isActive={activeField === 'birthday'}
          setActiveField={() => handleSetActiveField('birthday')}
        />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.label}>Phone:</p>
        <EditableField
          label="Phone"
          initialValue={user.user.phone}
          isActive={activeField === 'phone'}
          setActiveField={() => handleSetActiveField('phone')}
        />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.label}>City:</p>
        <EditableField
          label="City"
          initialValue={user.user.location}
          isActive={activeField === 'city'}
          setActiveField={() => handleSetActiveField('city')}
        />
      </div>
    </div>
  );
};
