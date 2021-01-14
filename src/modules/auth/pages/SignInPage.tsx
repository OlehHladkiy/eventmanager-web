import React from 'react';
import { useDispatch } from 'react-redux';

import { signIn } from '../AuthActions';
import FormWrapper from '../components/FormWrapper';
import SignInForm from '../forms/SignInForm';

const SignInPage = () => {
  const dispatch = useDispatch();

  const onSignIn = (data: { email: string; password: string }) => {
    dispatch(signIn(data));
  };

  return (
    <FormWrapper title="Sign In">
      <SignInForm onFinish={onSignIn} />
    </FormWrapper>
  );
};

export default SignInPage;
