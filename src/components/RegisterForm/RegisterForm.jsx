import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  Formik } from 'formik';
import * as yup from 'yup';
import { ref } from 'yup';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { FcGoogle } from 'react-icons/fc'

import {signUp } from 'redux/auth/authOperations';

import {
  Forma,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
  ShowPassword,
  StyledLink,
  GoogleLink, ClearInput, AppBox,
} from '../LoginForm/LoginForm.styled';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';



const RegisterSchema= () => yup.object().shape({
  password: yup.string()
    .min(6, 'Too short min 6 characters')
    .max(16, 'Too long max 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
      'Password should be min 6 characters, 1 uppercase, 1 lowercase, 1 number',
    )
    .required('Password is required')
    .trim(),
  confirmPassword: yup.string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords does not match'),
  email: yup.string()
    .email('Enter a valid Email')
    .required('Email is required')
    .trim(),
});

export const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const dispatch = useDispatch();


  const formSubmit = values => {
    dispatch(signUp(values ))

  }

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const showConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };
  const clearInput = ()=>{
    const inputs = document.querySelector('input[type=email]');
    inputs.value = '';
  }


  return (
    <>
      <FormContainer>
        <Formik validationSchema={RegisterSchema}
                initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
          formSubmit({values});
          setSubmitting(false);
          resetForm()
        }}>
          {({ errors, touched }) => (
          <Forma>
            <Title>Register</Title>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                style={{
                  border:
                    touched.email &&
                    (errors.email
                      ? '1px solid #F43F5E'
                      : '1px solid #00C3AD')
                }}
              />
              {touched.email && (errors.email ? (
                <ErrBox>{errors.email}</ErrBox>
              ) : (
                <AppBox>Email is correct</AppBox>
              ))}
              <ClearInput > {touched.email &&
                (!errors.email ?  <AiOutlineCheck style={{fill:'#00C3AD'}} /> : <AiOutlineClose style={{fill:'#F43F5E'}} onClick={clearInput}/>)}</ClearInput>
            </div>
            <div>
              <Input
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                style={{
                  border:
                    touched.password &&
                    (errors.password
                      ? '1px solid #F43F5E'
                      : '1px solid #00C3AD')
                }}
              />

              <ShowPassword onClick={showPassword}>
                {!showPass ? <ImEyeBlocked /> : <ImEye />}
              </ShowPassword>
              {touched.password && (errors.password ? (
                <ErrBox>{errors.password}</ErrBox>
              ) :(
                <AppBox>Password is secure</AppBox>
              ))}
            </div>

            <div>
              <Input
                name="confirmPassword"
                type={showConfirmPass ? 'text' : 'password'}
                placeholder="Confirm Password"
                style={{
                  border:
                    touched.confirmPassword &&
                    (errors.confirmPassword
                      ? '1px solid #F43F5E'
                      : '1px solid #00C3AD')
                }}
              />
              <ShowPassword onClick={showConfirmPassword}>
                {!showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
              </ShowPassword>
              {touched.confirmPassword &&
                (errors.confirmPassword ? (
                <ErrBox>{errors.confirmPassword}</ErrBox>
              )  :(
                <AppBox>Password is matched</AppBox>
                ))}
            </div>
            <Button type="button" onClick={formSubmit} >
              Registration
            </Button>
            <div><GoogleLink href="https://google"> <FcGoogle style={{width: "2em", height: "2em" }}/> Register with a Google account</GoogleLink></div>
            <div>
              <span>Already have an account?</span>{' '}
              <StyledLink to="/login">Login</StyledLink>
            </div>
          </Forma>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};
