import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import {
  UserDataContainer,
  Div,
  ImgWrapper,
  PreviewImage,
  FileInput,
  Button,
} from './UserData.styles';
import { UserDataItem } from '../UserDataItem/UserDataItem';
import defaultImage from '../../../images/desktop/photo_default_desktop.png';
import chekIcon from '../../../icons/check.svg';

export const UserData = () => {
  const [previewUrl, setPreviewUrl] = useState(defaultImage);
  const [isPreviewConfirmed, setIsPreviewConfirmed] = useState(false);

  const handleFileInputChange = event => {
    const file = event.target.files[0];
    setIsPreviewConfirmed(false);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmPreview = () => {
    setIsPreviewConfirmed(true);
  };

  const handleRejectPreview = () => {
    setPreviewUrl(defaultImage);
    setIsPreviewConfirmed(false);
  };

  const handleDefaultImageClick = () => {
    document.getElementById('fileInput').click();
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
        {previewUrl !== defaultImage && (
          <div>
            {!isPreviewConfirmed && (
              <Button onClick={handleRejectPreview}>
                <IoMdClose color="red" size={24} />
              </Button>
            )}
            <Button onClick={handleConfirmPreview}>
              <img src={chekIcon} alt="" />
            </Button>
          </div>
        )}
      </Div>
      <UserDataItem />
    </UserDataContainer>
  );
};
