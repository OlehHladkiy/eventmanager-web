import React from 'react';

import AuthFormWrapper from '../components/AuthFormWrapper';
import SignInForm from '../forms/SignIn';

const SignIn = () => (
  <AuthFormWrapper title="Sign In">
    <SignInForm />
  </AuthFormWrapper>
);

export default SignIn;
