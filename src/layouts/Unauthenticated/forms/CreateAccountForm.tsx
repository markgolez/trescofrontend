import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Form, Formik} from 'formik';

import {ButtonType} from '../../../components/Button';
import {FormField} from '../../../components/FormElements';
import {PATH_AUTHENTICATION} from '../../../constants/paths';
import {createUser} from '../../../dispatchers/users';
import {AppDispatch, SFC} from '../../../types';
import {handleFormikAPIError} from '../../../utils/forms';
import yup from '../../../utils/yup';

import * as S from './Styles';

const CreateAccountForm: SFC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: '',
  };

  type FormValues = typeof initialValues;

  const handleSubmit = async (values: FormValues, helpers: any): Promise<void> => {
    console.log('CreateAccountForm: handleSubmit called with values:', values);
    try {
      const requestData = {
        username: values.username,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
        re_password: values.re_password,
      };
      console.log('CreateAccountForm: Dispatching createUser with data:', requestData);
      await dispatch(createUser(requestData));
      console.log('CreateAccountForm: createUser completed successfully');
      navigate('/');
    } catch (error: any) {
      console.error('CreateAccountForm: Error in handleSubmit:', error);
      handleFormikAPIError(error, helpers, 'Error creating account');
    }
  };

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      username: yup
        .string()
        .min(2, 'Username must be at least 2 characters')
        .max(150, 'Username must not exceed 150 characters')
        .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
        .test('no-leading-underscore', 'Username cannot start with underscore', (value) => {
          return !value || !value.startsWith('_');
        })
        .test('no-trailing-underscore', 'Username cannot end with underscore', (value) => {
          return !value || !value.endsWith('_');
        })
        .test('no-consecutive-underscores', 'Username cannot contain consecutive underscores', (value) => {
          return !value || !value.includes('__');
        })
        .required('Username is required'),
      first_name: yup.string().required('First name is required'),
      last_name: yup.string().required('Last name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().required('Password is required'),
      re_password: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is required'),
    });
  }, []);

  return (
    <>
      <S.Heading>Create Account</S.Heading>
      <S.Panel>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({dirty, errors, isSubmitting, touched, isValid}) => {
            console.log('CreateAccountForm: Formik render state:', { dirty, isSubmitting, isValid, errors });
            return (
              <Form>
                <FormField>
                  <S.Input errors={errors} label="Username" name="username" touched={touched} />
                </FormField>
                <FormField>
                  <S.Input errors={errors} label="First Name" name="first_name" touched={touched} />
                </FormField>
                <FormField>
                  <S.Input errors={errors} label="Last Name" name="last_name" touched={touched} />
                </FormField>
                <FormField>
                  <S.Input errors={errors} label="Email" name="email" touched={touched} />
                </FormField>
                <FormField>
                  <S.Input errors={errors} label="Password" name="password" touched={touched} type="password" />
                </FormField>
                <FormField>
                  <S.Input
                    errors={errors}
                    label="Confirm Password"
                    name="re_password"
                    touched={touched}
                    type="password"
                  />
                </FormField>
                <FormField>
                  <S.Button
                    dirty={dirty}
                    disabled={isSubmitting}
                    isSubmitting={isSubmitting}
                    isValid={isValid}
                    text="Create Account"
                    type={ButtonType.submit}
                  />
                </FormField>
              </Form>
            );
          }}
        </Formik>
      </S.Panel>
      <S.QuestionText>
        Already have an account? <S.Link to={PATH_AUTHENTICATION.SIGN_IN}>Sign In</S.Link>
      </S.QuestionText>
    </>
  );
};

export default CreateAccountForm; 