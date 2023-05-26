import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import styles from './UserData.module.css';
import { UserDataItem } from '../UserDataItem/UserDataItem';
import defaultImage from '../../../images/desktop/photo_default_desktop.png';
import chekIcon from '../../../icons/check.svg';

export const UserData = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(defaultImage);
  const [isPreviewConfirmed, setIsPreviewConfirmed] = useState(false);

  const handleFileInputChange = event => {
    const file = event.target.files[0];
    // setSelectedFile(file);
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
    // Вы можете выполнить здесь необходимые действия после подтверждения превью
    setIsPreviewConfirmed(true);
  };

  const handleRejectPreview = () => {
    // Вы можете выполнить здесь необходимые действия после отклонения превью
    // setSelectedFile(null);
    setPreviewUrl(defaultImage);
    setIsPreviewConfirmed(false);
  };

  const handleDefaultImageClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <>
      <p>My information:</p>
      <div>
        <div
          style={{ maxWidth: '182px', maxHeight: '182px', overflow: 'hidden' }}
        >
          <img
            src={previewUrl}
            alt="Preview"
            onClick={handleDefaultImageClick}
            style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
          />
        </div>
        {!isPreviewConfirmed && (
          <div>
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
          </div>
        )}
        {previewUrl !== defaultImage && (
          <div>
            {!isPreviewConfirmed && (
              <button className={styles.button} onClick={handleRejectPreview}>
                <IoMdClose color="red" size={24} />
              </button>
            )}
            <button className={styles.button} onClick={handleConfirmPreview}>
              <img src={chekIcon} alt="" />
            </button>
          </div>
        )}
      </div>
      <UserDataItem />
    </>
  );
};
