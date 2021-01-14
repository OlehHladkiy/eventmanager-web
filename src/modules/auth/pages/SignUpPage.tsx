import React from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../AuthActions';
import FormWrapper from '../components/FormWrapper';
import SignUpForm from '../forms/SignUpForm';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const onSignUp = (data: {
    email: string;
    name: string;
    password: string;
  }) => {
    dispatch(signUp(data));
  };

  return (
    <FormWrapper title="Sign Up">
      <SignUpForm onFinish={onSignUp} />
    </FormWrapper>
  );
};

export default SignUpPage;
