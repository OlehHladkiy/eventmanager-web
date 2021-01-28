import React, { ReactChild, ReactNode } from 'react';
import styled from 'styled-components';

interface AuthFormWrapperProps {
  children: ReactChild;
  title: string | ReactNode;
}

const AuthFormWrapper = ({ children, title }: AuthFormWrapperProps) => (
  <AuthFormWrapper.Wrapper>
    <AuthFormWrapper.Content>
      <AuthFormWrapper.Title>{title}</AuthFormWrapper.Title>
      <div>{children}</div>
    </AuthFormWrapper.Content>
  </AuthFormWrapper.Wrapper>
);

AuthFormWrapper.Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 0.4fr;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.blue};
`;

AuthFormWrapper.Title = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 50px;
`;

AuthFormWrapper.Content = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 4px;
`;

export default AuthFormWrapper;
