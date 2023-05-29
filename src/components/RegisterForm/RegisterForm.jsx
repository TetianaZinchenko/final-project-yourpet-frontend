import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  Formik } from 'formik';
import { object, string, ref } from 'yup';
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
import icons from '../../icons/icons.svg';



const RegisterSchema = object().shape({
  password: string()
    .min(6, 'Too short min 6 characters')
    .max(16, 'Too long max 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
      'Password should be min 6 characters, 1 uppercase, 1 lowercase, 1 number'
    )
    .required('Password is required')
    .trim(),
  confirmPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords does not match'),
  email: string()
    .email('Enter a valid Email')
    .required('Email is required')
    .trim(),
});

export const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const dispatch = useDispatch();


  const formSubmit = ({ email, password }, { resetForm }) => {
    dispatch(signUp({ email, password }));
    resetForm();
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
                onSubmit={formSubmit}
        >
          {({ errors, touched }) => (
          <Forma>
            <Title>Register</Title>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                error={errors.email && touched.email && 'false'}
                valid={!errors.email && touched.email ? 'true' :  undefined}

              />
              {touched.email && (errors.email ? (
                <ErrBox>{errors.email}</ErrBox>
              ) : (
                <AppBox>Email is correct</AppBox>
              ))}
              <ClearInput > {touched.email && (!errors.email ? <svg style={{ fill: '#00C3AD' }}><use href={icons +'#icon-check'}></use></svg>
                :  <svg style={{ fill: '#F43F5E' }} onClick={clearInput}><use href={icons +'#icon-cross-small'}></use></svg>
                )}</ClearInput>
            </div>
            <div>
              <Input
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                error={errors.password && touched.password && 'false'}
                valid={!errors.password && touched.password ? 'true' :  undefined}
              />

              <ShowPassword onClick={showPassword}  error={errors.password && touched.password && 'false'}
                            valid={!errors.password && touched.password && '!null'}>
                {!showPass ? <svg><use href={icons +'#icon-eye-closed'}></use></svg> :  <svg><use href={icons +'#icon-eye-open'}></use></svg>}
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
                error={errors.confirmPassword && touched.confirmPassword && 'false'}
                valid={!errors.confirmPassword && touched.confirmPassword ?'true' :  undefined}

              />
              <ShowPassword onClick={showConfirmPassword} error={errors.confirmPassword && touched.confirmPassword && 'false'}
                            valid={!errors.confirmPassword && touched.confirmPassword && '!null'}>
                {!showPass ? <svg><use href={icons +'#icon-eye-closed'}></use></svg> :  <svg><use href={icons +'#icon-eye-open'}></use></svg>}
              </ShowPassword>
              {touched.confirmPassword &&
                (errors.confirmPassword ? (
                <ErrBox>{errors.confirmPassword}</ErrBox>
              )  :(
                <AppBox>Password is matched</AppBox>
                ))}
            </div>
            <Button type="submit"  >
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
