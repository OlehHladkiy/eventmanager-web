import React from 'react';

import AuthFormWrapper from '../components/AuthFormWrapper';
import SignUpForm from '../forms/SignUpForm';

const SignUpPage = () => (
  <AuthFormWrapper title="Sign Up">
    <SignUpForm />
  </AuthFormWrapper>
);

export default SignUpPage;
