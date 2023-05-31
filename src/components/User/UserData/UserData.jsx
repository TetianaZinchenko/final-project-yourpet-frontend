import { useState } from 'react';
import { updateUser } from '../../../redux/auth/authOperations';
import { selectUser } from '../../../redux/auth/authSelectors';

import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import {
  UserDataContainer,
  Div,
  ImgWrapper,
  PreviewImage,
  FileInput,
  Button,
  BushowButtonstton,
} from './UserData.styles';

import { UserDataItem } from '../UserDataItem/UserDataItem';
import chekIcon from '../../../icons/check.svg';

// Cloudinary конфигурация
const cloudName = 'dvt0czglz';
const uploadPreset = 'eqykdqjy';

export const UserData = () => {
  const user = useSelector(selectUser);
  const [previewUrl, setPreviewUrl] = useState(user.avatarURL);
  const [isPreviewConfirmed, setIsPreviewConfirmed] = useState(false);
  const [showButtons, setShowButtons] = useState(false); // Добавлен новый useState

  const dispatch = useDispatch();

  const handleFileInputChange = event => {
    const file = event.target.files[0];
    setIsPreviewConfirmed(false);
    setShowButtons(true); // Показываем кнопки при выборе файла
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmPreview = async () => {
    if (previewUrl !== selectUser.avatarURL) {
      try {
        const response = await uploadImageToCloudinary(previewUrl);
        const imageUrl = response.secure_url;
        // Отправить ссылку на бекэнд
        sendImageUrlToBackend(imageUrl);
      } catch (error) {
        console.error('Ошибка загрузки фото на Cloudinary:', error);
      }
    }
    setIsPreviewConfirmed(true);
    setShowButtons(false); // Скрываем кнопки после подтверждения превью
  };

  const handleRejectPreview = () => {
    setPreviewUrl(selectUser.avatarURL);
    setIsPreviewConfirmed(false);
    setShowButtons(false); // Скрываем кнопки при отклонении превью
  };

  const handleDefaultImageClick = () => {
    document.getElementById('fileInput').click();
  };

  // Функция для загрузки фото на Cloudinary
  const uploadImageToCloudinary = async imageUrl => {
    const formData = new FormData();
    formData.append('file', imageUrl);
    formData.append('upload_preset', uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Ошибка загрузки фото на Cloudinary');
    }

    return response.json();
  };

  // Функция для отправки ссылки на фото на бекэнд
  const sendImageUrlToBackend = imageUrl => {
    // Ваш код для отправки imageUrl на бекэнд
    dispatch(updateUser({ avatarURL: imageUrl }));
    console.log('Ссылка на фото:', imageUrl);
  };

  return (
    <UserDataContainer>
      <p>My information:</p>
      <Div>
        <ImgWrapper onClick={handleDefaultImageClick}>
          <PreviewImage src={previewUrl} alt="Preview" />
        </ImgWrapper>
        {!isPreviewConfirmed && (
          <div>
            <FileInput
              id="fileInput"
              type="file"
              onChange={handleFileInputChange}
            />
          </div>
        )}
        {showButtons && ( // Показываем кнопки по условию showButtons
          <BushowButtonstton>
            <Button onClick={handleRejectPreview}>
              <IoMdClose color="red" size={24} />
            </Button>
            <Button onClick={handleConfirmPreview}>
              <img src={chekIcon} alt="" />
            </Button>
          </BushowButtonstton>
        )}
      </Div>
      <UserDataItem />
    </UserDataContainer>
  );
};
