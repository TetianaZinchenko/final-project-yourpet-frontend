import React, { useState } from 'react';
import chekIcon from '../../../icons/check.svg';
import editIcon from '../../../icons/edit-2.svg';
import styles from './UserDataItem.module.css';

const EditableField = ({ label, initialValue, isActive, setActiveField }) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setActiveField();
  };

  const handleSave = () => {
    setIsEditing(false);
    setActiveField(false); // Закрываем форму после сохранения
    // Здесь вы можете выполнить дополнительные действия с сохраненными данными,
    // например, отправить их на сервер или вызвать колбэк-функцию для обработки данных.
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
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

  const handleSetActiveField = field => {
    setActiveField(activeField === field ? null : field);
  };

  return (
    <div className={styles.div}>
      <EditableField
        label="Name:"
        initialValue="Anna"
        isActive={activeField === 'name'}
        setActiveField={() => handleSetActiveField('name')}
      />
      <EditableField
        label="Email:"
        initialValue="anna00@gmail.com"
        isActive={activeField === 'email'}
        setActiveField={() => handleSetActiveField('email')}
      />
      <EditableField
        label="Birthday:"
        initialValue="00.00.0000"
        isActive={activeField === 'birthday'}
        setActiveField={() => handleSetActiveField('birthday')}
      />
      <EditableField
        label="Phone:"
        initialValue="+38000000000"
        isActive={activeField === 'phone'}
        setActiveField={() => handleSetActiveField('phone')}
      />
      <EditableField
        label="City:"
        initialValue="Kiev"
        isActive={activeField === 'city'}
        setActiveField={() => handleSetActiveField('city')}
      />
    </div>
  );
};
