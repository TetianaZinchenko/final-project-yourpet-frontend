import { useState } from 'react';
import React from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { signIn } from 'redux/auth/authOperations';
import {
  Forma,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
  AppBox,
  ShowPassword,
  StyledLink,
  ClearInput,
} from './LoginForm.styled';
import { Section } from '../Section/Section';

const LoginSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .required(`Email is required`)
      .email(`Enter a valid Email`)
      .trim(),
    password: yup
      .string()
      .required(`Password is required`)
      .min(6, `Too short min 6 characters`)
      .max(16, `Too long max 16 characters`)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
        'Password should be min 6 characters, 1 uppercase, 1 lowercase, 1 number'
      )
      .trim(),
  });

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const formSubmit = values => {
    dispatch(signIn(values));
  };
  const showPassword = () => {
    setShowPass(!showPass);
  };
  const clearInput = () => {
    const inputs = document.querySelector('input[type=email]');
    inputs.value = '';
  };
  return (
    <Section>
      <FormContainer>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, { resetForm }) => {
            formSubmit({ values });
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Forma>
              <Title>Login</Title>
              <div>
                <Input
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="Email"
                  style={{
                    border:
                      touched.email &&
                      (errors.email
                        ? '1px solid #F43F5E'
                        : '1px solid #00C3AD'),
                  }}
                />
                {touched.email &&
                  (errors.email ? (
                    <ErrBox>{errors.email}</ErrBox>
                  ) : (
                    <AppBox>Email is correct</AppBox>
                  ))}
                <ClearInput>
                  {' '}
                  {touched.email &&
                    (!errors.email ? (
                      <AiOutlineCheck style={{ fill: '#00C3AD' }} />
                    ) : (
                      <AiOutlineClose
                        style={{ fill: '#F43F5E' }}
                        onClick={clearInput}
                      />
                    ))}
                </ClearInput>
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
                        : '1px solid #00C3AD'),
                  }}
                />
                <ShowPassword onClick={showPassword}>
                  {!showPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {touched.password &&
                  (errors.password ? (
                    <ErrBox>{errors.password}</ErrBox>
                  ) : (
                    <AppBox>Password is secure</AppBox>
                  ))}
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
    </Section>
  );
};
export default LoginForm;
