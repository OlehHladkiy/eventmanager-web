import React from 'react';

import AuthFormWrapper from '../components/AuthFormWrapper';
import SignUpForm from '../forms/SignUp';

const SignUp = () => (
  <AuthFormWrapper title="Sign Up">
    <SignUpForm />
  </AuthFormWrapper>
);

export default SignUp;
