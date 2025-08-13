import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../store'; // adjust path if needed
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
// If registerUser is a default export:
import { registerUser } from '../../dispatchers/users';
// OR if the correct named export is different, e.g. 'register':
// import { register } from '../../dispatchers/users';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
  }
  button {
    width: 100%;
    padding: 0.75rem;
    background: #4F46E5;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    &:disabled {
      background: #a5b4fc;
      cursor: not-allowed;
    }
  }
  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.75rem;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 1rem;
    background: #F9FAFB;
  }
  .error {
    color: #dc2626;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  re_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm your password'),
});
const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const registration = useSelector((state: any) => state.users.registration);

  return (
    <FormContainer>
      <Formik
        initialValues={{
          username: '',
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          re_password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          setStatus('');
          try {
            await dispatch(registerUser(values));
            setStatus('Account created successfully!');
            setTimeout(() => navigate('/dashboard'), 1200);
          } catch (err: any) {
            setStatus(err?.message || 'Registration failed');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <h2>Sign Up</h2>
            <Field name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" className="error" />
            <Field name="first_name" placeholder="First Name" />
            <ErrorMessage name="first_name" component="div" className="error" />
            <Field name="last_name" placeholder="Last Name" />
            <ErrorMessage name="last_name" component="div" className="error" />
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
            <Field name="re_password" type="password" placeholder="Confirm Password" />
            <ErrorMessage name="re_password" component="div" className="error" />
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Signing Up...' : 'Sign Up'}</button>
            {status && <div className="error">{status}</div>}
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default SignUp;
