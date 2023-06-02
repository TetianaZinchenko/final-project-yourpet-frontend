import React from 'react';
import { useRef, useState } from 'react';
import { useFormikContext, ErrorMessage, Field } from 'formik';
import { ReactComponent as PlusFile } from '../../../icons/plus.svg';
import { ReactComponent as Female } from '../../../icons/female.svg';
import { ReactComponent as Male } from '../../../icons/male.svg';
import { Input, InputTitle, ErrBox, Option } from '../AddPet.styled';
import { PlusFileButton, Image, Thumb } from './MoreInfo.styled';
import { useMediaQuery } from 'react-responsive';

export const MoreInfo = ({ selectedOption }) => {
  const { errors, touched, setFieldValue } = useFormikContext();
  const [selectedSex, setSelectedSex] = useState('');
  const handleSexSelect = sex => {
    setSelectedSex(sex);
  };

  const fileInputRef = useRef(null);
  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const [petImage, SetPetImage] = useState(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleUploadImage = event => {
    const uploadImage = event.currentTarget.files[0];
    setFieldValue('file', uploadImage);
    const image = uploadImage ? URL.createObjectURL(uploadImage) : null;
    SetPetImage(image);

    // todo: upload server
    // console.error('todo: upload server');
    var reader = new FileReader();
    reader.onload = function () {
      setFieldValue('avatar', reader.result);
    };
    reader.readAsDataURL(uploadImage);
  };

  const screenWidth = window.innerWidth;

  return (
    <>
      <Thumb
        style={{
          marginBottom:
            !isMobile && selectedOption !== 'your pet' ? '53px' : '',
          flexDirection: selectedOption === 'your pet' ? 'column' : '',
          gap: !isMobile && selectedOption !== 'your pet' ? '78px' : '',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: selectedOption === 'your pet' ? 'row' : 'column',
            justifyContent:
              selectedOption !== 'your pet' ? 'space-between' : '',
            gap: '16px',
          }}
        >
          {selectedOption !== 'your pet' && (
            <div>
              <InputTitle style={{ marginBottom: '0px' }}>The sex</InputTitle>
              <div style={{ display: 'flex', gap: '23px' }}>
                <Option
                  htmlFor="female"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    color: selectedSex === 'Female' ? '#00C3AD' : '#888888',
                    margin: '0px',
                    padding: '0px',
                    fontSize: '16px',
                  }}
                  onClick={() => handleSexSelect('Female')}
                >
                  <Female
                    style={{
                      stroke: selectedSex === 'Female' ? '#F43F5E' : '#888888',
                    }}
                  />
                  <Field
                    style={{ appearance: 'none' }}
                    id="female"
                    name="sex"
                    type="radio"
                    value="Female"
                  />
                  Female
                </Option>

                <Option
                  htmlFor="male"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    color: selectedSex === 'Male' ? '#00C3AD' : '#888888',
                    margin: '0px',
                    padding: '0px',
                    fontSize: '16px',
                  }}
                  onClick={() => handleSexSelect('Male')}
                >
                  <Male
                    style={{
                      stroke: selectedSex === 'Male' ? '#54ADFF' : '#888888',
                    }}
                  />
                  <Field
                    style={{ appearance: 'none' }}
                    id="male"
                    name="sex"
                    type="radio"
                    value="Male"
                  />
                  Male
                </Option>
              </div>
              {errors.sex && <div style={{ color: 'red' }}>{errors.sex}</div>}
            </div>
          )}
          <ErrorMessage component={ErrBox} name="sex" />
          <div
            style={{
              display: 'flex',
              flexDirection:
                selectedOption === 'your pet' || screenWidth < 768
                  ? 'row'
                  : 'column',
              alignItems:
                selectedOption === 'your pet' || screenWidth < 768
                  ? 'center'
                  : '',
              justifyContent: 'left',
              marginBottom: '0px',
              gap: '16px',
            }}
          >
            <InputTitle
              style={{
                display: 'inline',
                width:
                  screenWidth > 767 && selectedOption !== 'your pet'
                    ? '200px'
                    : '114px',
                marginBottom: '0px',
              }}
            >
              Load the pet's image:
            </InputTitle>

            <div style={{ position: 'relative' }}>
              <PlusFileButton type="button" onClick={handleFileButtonClick}>
                {petImage && <Image src={petImage} />}
                {!petImage && (
                  <PlusFile style={{ width: '48px', height: '48px' }} />
                )}
              </PlusFileButton>
              <input
                name="file"
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleUploadImage}
              />
              <ErrorMessage component={ErrBox} name="file" />
            </div>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:
              (selectedOption === 'lost/found' ||
                selectedOption === 'in good hands') &&
              'space-between',
          }}
        >
          {selectedOption !== 'your pet' && (
            <div style={{ marginBottom: '7px', position: 'relative' }}>
              <InputTitle style={{ marginBottom: '0px' }}>Location</InputTitle>
              <Input
                name="location"
                type="text"
                autoComplete="off"
                placeholder="Type title"
                style={{
                  width: '100%',
                  border:
                    touched.location &&
                    (errors.location
                      ? '1px solid #F43F5E'
                      : '1px solid #00C3AD'),
                }}
              />
              <ErrorMessage component={ErrBox} name="location" />
            </div>
          )}
          {selectedOption === 'sell' && (
            <div style={{ marginBottom: '7px', position: 'relative' }}>
              <InputTitle style={{ marginBottom: '0px' }}>Price</InputTitle>
              <Input
                name="price"
                type="text"
                autoComplete="off"
                placeholder="Type title"
                style={{
                  width: '100%',
                  border:
                    touched.price &&
                    (errors.price ? '1px solid #F43F5E' : '1px solid #00C3AD'),
                }}
              />
              <ErrorMessage component={ErrBox} name="price" />
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '0px',
              position: 'relative',
              marginTop: '17px',
            }}
          >
            <InputTitle
              style={{
                display: 'inline',
                marginBottom: '0px',
                width: '100%',
              }}
            >
              Comment
            </InputTitle>
            <Input
              as="textarea"
              rows={
                selectedOption === 'lost/found' ||
                selectedOption === 'in good hands'
                  ? '7'
                  : '2'
              }
              type="text"
              name="comments"
              placeholder="Type a comment"
              autoComplete="off"
              style={{
                borderRadius: '20px',
                width: '100%',
                marginBottom: '7px',
              }}
            ></Input>
            <ErrorMessage component={ErrBox} name="comments" />
          </div>
        </div>
      </Thumb>
    </>
  );
};
