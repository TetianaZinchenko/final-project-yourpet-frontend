import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { object, string, ref } from 'yup';
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
} from '../LoginForm/LoginForm.styled';


const RegisterSchema = object().shape({
  password: string()
    .min(7, 'Too Short!')
    .max(32, 'Too Long!')
    .required('Password is required'),
  confirmPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords does not match'),
  email: string()
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Invalid email'
    )
    .email('Invalid email')
    .required('Email is required'),

});

export const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const dispatch = useDispatch();


  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);

    const credentials = {
      email: values.email,
      password: values.password,
    };

    await dispatch(signUp(credentials));
    resetForm();}

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: RegisterSchema,
    onSubmit,
  });

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const showConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };


  return (
    <>
      <FormContainer>

        <Formik validationSchema={RegisterSchema} initialValues={formik}>
          <Forma onSubmit={formik.handleSubmit}>
            <Title>Register</Title>

            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                style={{
                  border:
                    ((formik.errors.email &&
                      '1px solid red'))}}

              />
              {formik.errors.email && formik.touched.email ? (
                <ErrBox>{formik.errors.email}</ErrBox>
              ) : null}

            </div>
            <div>
              <Input
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />

              <ShowPassword onClick={showPassword}>
                {!showPass ? <ImEyeBlocked /> : <ImEye />}
              </ShowPassword>
              {formik.errors.password && formik.touched.password ? (
                <ErrBox>{formik.errors.password}</ErrBox>
              ) : null}
            </div>

            <div>
              <Input
                name="confirmPassword"
                type={showConfirmPass ? 'text' : 'password'}
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
              />
              <ShowPassword onClick={showConfirmPassword}>
                {!showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
              </ShowPassword>
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <ErrBox>{formik.errors.confirmPassword}</ErrBox>
              ) : null}
            </div>
            <Button type="button" onClick={onSubmit} >
              Registration
            </Button>
            <div><StyledLink href="https://google"> <FcGoogle style={{width: "2em", height: "2em" }}/> Register with a Google account</StyledLink></div>
            <div>
              <span>Already have an account?</span>{' '}
              <StyledLink to="/login">Login</StyledLink>
            </div>
          </Forma>
        </Formik>
      </FormContainer>
    </>
  );
};
