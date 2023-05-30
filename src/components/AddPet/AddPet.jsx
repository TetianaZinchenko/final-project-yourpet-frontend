import React from 'react';
import { useState } from 'react';
import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
import { ReactComponent as Pawprint } from '../../icons/pawprint.svg';
import { ReactComponent as ArrowLeft } from '../../icons/arrow-left.svg';

import {
  Forma,
  FormContainer,
  Input,
  Title,
  ErrBox,
  Option,
  Stepper,
  Step,
  StepLine,
  CancelButton,
  PrevStepButton,
  NextStepButton,
  ButtonText,
} from './AddPet.styled';

import { MoreInfo } from './MoreInfo/MoreInfo';
import { useDispatch, useSelector } from 'react-redux';
import { createNotice } from 'redux/notices/noticesOperations';
import {
  selectNoticeError,
  selectNoticePostStatus,
} from 'redux/notices/noticesSelectors';
import { useEffect } from 'react';
import { resetStatus } from 'redux/notices/noticesSlice';
import toast from 'react-hot-toast';

const addPetFormSchema = yup.object().shape({
  title: yup.string().when('category', {
    is: category => category !== 'your pet',
    then: schema =>
      schema
        .min(2, 'Minimum 2 characters')
        .max(16, 'Maximum 16 characters')
        .required('Title is required (min 2, max 16 characters)'),
  }),
  category: yup
    .string()
    .oneOf(['your pet', 'sell', 'lost/found', 'in good hands'])
    .required('Category is required'),
  name: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Name is required (min 2, max 16 characters)'),
  date: yup
    .string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'DD.MM.YYYY format needed')
    .required('Date is required (DD.MM.YYYY format)'),
  breed: yup
    .string('Must be a string')
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Breed is required (min 2, max 16 characters)'),
  file: yup
    .mixed()
    .test('fileSize', 'File size is too large', value => value?.size <= 3145728)
    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    )
    .required('Photo is required'),
  sex: yup.string().when('category', {
    is: category =>
      category === 'sell' ||
      category === 'lost/found' ||
      category === 'in good hands',
    then: schema =>
      schema.oneOf(['Female', 'Male']).required('Sex is required'),
  }),
  location: yup.string().when('category', {
    is: category => category !== 'your pet',
    then: schema =>
      schema
        .matches(/^[A-Z][a-zA-Z]*$/, 'City begins with capitalize character')
        .required('City is required'),
  }),
  price: yup.number().when('category', {
    is: category => category === 'sell',
    then: schema =>
      schema
        .moreThan(0, 'Price must be greater than 0')
        .required('Price is required'),
  }),
  comment: yup
    .string()
    .min(8, 'Minimum 8 characters')
    .max(120, 'Maximum 120 characters'),
});

export const AddPet = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetStatus());
  }, [dispatch]);

  let resetFormik = () => {};
  const postStatus = useSelector(selectNoticePostStatus);
  const postError = useSelector(selectNoticeError);

  switch (postStatus) {
    case 1:
      // loading
      break;

    case 2:
      alert('Нову замітку було додано!');
      setStep(1);
      setSelectedOption('');
      resetFormik();
      break;

    case 3:
      toast.error(postError);
      break;

    default:
      break;
  }

  const handleNextStep = (errors, values) => {
    if (step === 1 && values.category !== '' && !errors.category) {
      setStep(step + 1);
    } else if (
      step === 2 &&
      values.name !== '' &&
      values.date !== '' &&
      values.breed !== '' &&
      !errors.name &&
      !errors.date &&
      !errors.breed
    ) {
      setStep(step + 1);
    } else {
      toast.error('Будь ласка, заповніть всі поля');
    }
  };

  const formSubmit = values => dispatch(createNotice(values));
  const handlePreviousStep = () => setStep(step - 1);

  const screenWidth = window.innerWidth;
  return (
    <>
      <FormContainer>
        <Formik
          validationSchema={addPetFormSchema}
          initialValues={{
            name: 'test',
            date: '10.10.2010',
            breed: 'test',
            category: '',
            file: '',
            comment: 'test',
            title: 'test',
            location: 'Test',
            price: '22',
          }}
          onSubmit={(values, { resetForm }) => {
            resetFormik = resetForm;
            formSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <Forma
              style={{
                width:
                  step === 3 &&
                  selectedOption !== 'your pet' &&
                  screenWidth > 1279
                    ? '822px'
                    : '',
                padding:
                  step === 3 &&
                  selectedOption !== 'your pet' &&
                  screenWidth > 1279
                    ? '20px 75px'
                    : '',
              }}
            >
              <div>
                <Title
                  style={{
                    textAlign:
                      step === 3 &&
                      selectedOption !== 'your pet' &&
                      screenWidth > 1279
                        ? 'center'
                        : '',
                  }}
                >
                  Add Pet
                </Title>
                <Stepper style={{ marginBottom: '30px' }}>
                  <Step>
                    <p
                      style={{
                        color:
                          step === 1
                            ? '#54adff'
                            : values.category !== '' && !errors.category
                            ? '#00C3AD'
                            : '',
                      }}
                    >
                      Choose option
                    </p>
                    <StepLine
                      style={{
                        backgroundColor:
                          step === 1
                            ? '#54adff'
                            : values.category !== '' && !errors.category
                            ? '#00C3AD'
                            : '',
                      }}
                    />
                  </Step>
                  <Step>
                    <p
                      style={{
                        color:
                          step === 2
                            ? '#54adff'
                            : values.name !== '' &&
                              values.date !== '' &&
                              values.breed !== '' &&
                              !errors.name &&
                              !errors.date &&
                              !errors.breed
                            ? '#00C3AD'
                            : '',
                      }}
                    >
                      Personal details
                    </p>
                    <StepLine
                      style={{
                        backgroundColor:
                          step === 2
                            ? '#54adff'
                            : values.name !== '' &&
                              values.date !== '' &&
                              values.breed !== '' &&
                              !errors.name &&
                              !errors.date &&
                              !errors.breed
                            ? '#00C3AD'
                            : '',
                      }}
                    />
                  </Step>
                  <Step>
                    <p
                      style={{
                        color:
                          step === 3
                            ? '#54adff'
                            : values.comment !== '' && !errors.comment
                            ? '#00C3AD'
                            : '',
                      }}
                    >
                      More info
                    </p>
                    <StepLine
                      style={{
                        backgroundColor:
                          step === 3
                            ? '#54adff'
                            : values.file !== '' &&
                              values.comment !== '' &&
                              !errors.file &&
                              !errors.comment
                            ? '#00C3AD'
                            : '',
                      }}
                    />
                  </Step>
                </Stepper>
                {step === 1 && (
                  <>
                    <div>
                      <Option
                        htmlFor="option1"
                        style={{
                          backgroundColor:
                            selectedOption === 'your pet' ? '#54adff' : '',
                          color: selectedOption === 'your pet' ? '#fff' : '',
                        }}
                        onClick={() => setSelectedOption('your pet')}
                      >
                        <Field
                          style={{ appearance: 'none' }}
                          id="option1"
                          name="category"
                          type="radio"
                          value="your pet"
                        />
                        your pet
                      </Option>
                    </div>
                    <div>
                      <Option
                        htmlFor="option2"
                        style={{
                          backgroundColor:
                            selectedOption === 'sell' ? '#54adff' : '',
                          color: selectedOption === 'sell' ? '#fff' : '',
                        }}
                        onClick={() => setSelectedOption('sell')}
                      >
                        <Field
                          style={{ appearance: 'none' }}
                          id="option2"
                          name="category"
                          type="radio"
                          value="sell"
                        />
                        sell
                      </Option>
                    </div>
                    <div>
                      <Option
                        htmlFor="option3"
                        style={{
                          backgroundColor:
                            selectedOption === 'lost/found' ? '#54adff' : '',
                          color: selectedOption === 'lost/found' ? '#fff' : '',
                        }}
                        onClick={() => setSelectedOption('lost/found')}
                      >
                        <Field
                          style={{ appearance: 'none' }}
                          id="option3"
                          name="category"
                          value="lost/found"
                          type="radio"
                        />
                        lost/found
                      </Option>
                    </div>
                    <div>
                      <Option
                        htmlFor="option4"
                        style={{
                          backgroundColor:
                            selectedOption === 'in good hands' ? '#54adff' : '',
                          color:
                            selectedOption === 'in good hands' ? '#fff' : '',
                        }}
                        onClick={() => setSelectedOption('in good hands')}
                      >
                        <Field
                          style={{ appearance: 'none' }}
                          id="option4"
                          name="category"
                          value="in good hands"
                          type="radio"
                        />
                        in good hands
                      </Option>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    {selectedOption !== 'your pet' && (
                      <div
                        style={{ marginBottom: '7px', position: 'relative' }}
                      >
                        <Title
                          style={{ fontSize: '20px', marginBottom: '0px' }}
                        >
                          Title of add
                        </Title>
                        <Input
                          name="title"
                          type="text"
                          autoComplete="off"
                          placeholder="Type title"
                          style={{
                            border:
                              touched.title &&
                              (errors.title
                                ? '1px solid #F43F5E'
                                : '1px solid #00C3AD'),
                          }}
                        />
                        <ErrorMessage component={ErrBox} name="title" />
                      </div>
                    )}
                    <div style={{ marginBottom: '7px', position: 'relative' }}>
                      <Title style={{ fontSize: '20px', marginBottom: '0px' }}>
                        Pet's name
                      </Title>
                      <Input
                        name="name"
                        type="text"
                        autoComplete="off"
                        placeholder="Type pet name"
                        style={{
                          border:
                            touched.name &&
                            (errors.name
                              ? '1px solid #F43F5E'
                              : '1px solid #00C3AD'),
                        }}
                      />
                      <ErrorMessage component={ErrBox} name="name" />
                    </div>
                    <div style={{ marginBottom: '7px', position: 'relative' }}>
                      <Title style={{ fontSize: '20px', marginBottom: '0px' }}>
                        Date of birth
                      </Title>
                      <Input
                        name="date"
                        type="text"
                        autoComplete="off"
                        placeholder="Type date of birth"
                        style={{
                          border:
                            touched.date &&
                            (errors.date
                              ? '1px solid #F43F5E'
                              : '1px solid #00C3AD'),
                        }}
                      />
                      <ErrorMessage component={ErrBox} name="date" />
                    </div>
                    <div style={{ marginBottom: '7px', position: 'relative' }}>
                      <Title style={{ fontSize: '20px', marginBottom: '0px' }}>
                        Breed
                      </Title>
                      <Input
                        name="breed"
                        type="text"
                        autoComplete="off"
                        placeholder="Type breed"
                        style={{
                          border:
                            touched.breed &&
                            (errors.breed
                              ? '1px solid #F43F5E'
                              : '1px solid #00C3AD'),
                        }}
                      />
                      <ErrorMessage component={ErrBox} name="breed" />
                    </div>
                  </>
                )}
                {step === 3 && <MoreInfo selectedOption={selectedOption} />}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '24px',
                  marginBottom: '0px',
                }}
              >
                {step === 1 && (
                  <CancelButton type="button" to="/notices/:categoryName">
                    <ArrowLeft style={{ marginRight: '16px' }} />
                    <ButtonText style={{ color: '#54ADFF' }}>Cancel</ButtonText>
                  </CancelButton>
                )}
                {step > 1 && (
                  <PrevStepButton type="button" onClick={handlePreviousStep}>
                    <ArrowLeft style={{ marginRight: '16px' }} />
                    <ButtonText style={{ color: '#54ADFF' }}>Back</ButtonText>
                  </PrevStepButton>
                )}
                {step < 3 && (
                  <NextStepButton
                    type="button"
                    onClick={() => handleNextStep(errors, values)}
                  >
                    <ButtonText>Next</ButtonText>
                    <Pawprint />
                  </NextStepButton>
                )}
                {step === 3 && (
                  <NextStepButton type="submit">
                    <ButtonText>
                      {postStatus !== 1 ? 'Done' : 'Loading'}
                    </ButtonText>
                    <Pawprint />
                  </NextStepButton>
                )}
              </div>
            </Forma>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};
