import React, { ReactChild, ReactNode } from 'react';
import styled from 'styled-components';

interface FormWrapperProps {
  children: ReactChild;
  title: string | ReactNode;
}

const FormWrapper = ({ children, title }: FormWrapperProps) => (
  <FormWrapper.Wrapper>
    <FormWrapper.Content>
      <FormWrapper.Title>{title}</FormWrapper.Title>
      <div>{children}</div>
    </FormWrapper.Content>
  </FormWrapper.Wrapper>
);

FormWrapper.Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 0.4fr;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.blue};
`;

FormWrapper.Title = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 50px;
`;

FormWrapper.Content = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 4px;
`;

export default FormWrapper;
