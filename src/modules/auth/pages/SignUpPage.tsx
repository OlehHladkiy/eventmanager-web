import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../AuthActions';
import * as AuthServices from '../AuthServices';
import FormWrapper from '../components/FormWrapper';
import SignUpForm from '../forms/SignUpForm';

const SignUpPage = () => {
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const dispatch = useDispatch();

  const onSignUp = (data: {
    email: string;
    name: string;
    password: string;
  }) => {
    dispatch(signUp(data));
  };

  const onCheckEmail = async (_: any, email: string) => {
    setIsCheckingEmail(true);
    const response = await AuthServices.isEmailExists(email);
    setIsCheckingEmail(false);

    if (response.data) {
      throw new Error('Email already exists!');
    }
  };

  return (
    <FormWrapper title="Sign Up">
      <SignUpForm
        isCheckingEmail={isCheckingEmail}
        onCheckEmail={onCheckEmail}
        onFinish={onSignUp}
      />
    </FormWrapper>
  );
};

export default SignUpPage;
