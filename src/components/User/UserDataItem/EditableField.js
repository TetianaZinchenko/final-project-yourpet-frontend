import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../../redux/auth/authOperations';
import { selectAuth } from '../../../redux/auth/authSelectors';
import chekIcon from '../../../icons/check.svg';
import editIcon from '../../../icons/edit-2.svg';
import {
  InputContainer,
  Input,
  ButtonCheck,
  ButtonEdit,
} from './EditableField.styles';

const EditableField = ({ label, initialValue, isActive, setActiveField }) => {
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  const handleEdit = () => {
    setActiveField();
  };

  const handleSave = async () => {
    try {
      await dispatch(updateUser({ [label]: value }));
      await dispatch(getUser(auth._id));
      setActiveField(false);
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    }
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      {isActive ? (
        <InputContainer>
          <Input type="text" value={value} onChange={handleChange} />
          <ButtonCheck onClick={handleSave}>
            <img src={chekIcon} alt="" />
          </ButtonCheck>
        </InputContainer>
      ) : (
        <Input>
          <span>{value}</span>
          <ButtonEdit onClick={handleEdit}>
            <img src={editIcon} alt="" />
          </ButtonEdit>
        </Input>
        // </div>
      )}
    </div>
  );
};

export default EditableField;
