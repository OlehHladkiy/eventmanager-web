import React from 'react';

import AuthFormWrapper from '../components/AuthFormWrapper';
import SignInForm from '../forms/SignInForm';

const SignInPage = () => (
  <AuthFormWrapper title="Sign In">
    <SignInForm />
  </AuthFormWrapper>
);

export default SignInPage;
