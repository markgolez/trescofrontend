import {useLocation} from 'react-router-dom';

import {PATH_AUTHENTICATION} from '../../constants/paths';
import {SFC} from '../../types';

import CreateAccountForm from './forms/CreateAccountForm';
import SignInForm from './forms/SignInForm';
import * as S from './Styles';

const Unauthenticated: SFC = ({className}) => {
  const { pathname } = useLocation();
  const isCreate = pathname === PATH_AUTHENTICATION.CREATE_ACCOUNT;
  return (
    <S.Container className={className}>
      {isCreate ? <CreateAccountForm /> : <SignInForm />}
    </S.Container>
  );
};

export default Unauthenticated; 