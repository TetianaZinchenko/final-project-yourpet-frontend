import { useState } from 'react';
import React from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';


import { signIn } from 'redux/auth/authOperations';

import {
  Forma,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
  ShowPassword,
  StyledLink,
} from './LoginForm.styled';

const SignupSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .required(`Required`)
      .email(`Enter a valid Email`)
      .trim(),
    password: yup
      .string()
      .required(`Required`)
      .min(7, `Password should be from 7 to 32 characters`)
      .max(32, `Password should be from 7 to 32 characters`)
      .trim(),
  });

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const formSubmit = values => {
    dispatch(signIn(values))};
  const showPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <>

      <FormContainer>
        <Formik
          validationSchema={SignupSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, { resetForm }) => {
            formSubmit({values});
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Forma>
              <Title>Login</Title>
              <div>
                <Input name="email" type="email" placeholder="Email" />

                {errors.email && touched.email ? (
                  <ErrBox>{errors.email}</ErrBox>
                ) : null}
              </div>
              <div>
                <Input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Password"
                />
                <ShowPassword onClick={showPassword}>
                  {!showPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {errors.password && touched.password ? (
                  <ErrBox>{errors.password}</ErrBox>
                ) : null}
              </div>

              <Button type="submit">Login</Button>

              <div>
                <span>Don't have an account?</span>{' '}
                <StyledLink to="/register">Register</StyledLink>
              </div>
            </Forma>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};
export default LoginForm;
