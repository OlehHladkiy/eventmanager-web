import React, { ReactChildren, ReactNode } from 'react';
import styled from 'styled-components';

interface FormWrapperProps {
  title: string | ReactNode;
  description: string | ReactNode;
  icon: ReactNode;
  children: ReactChildren | any;
}

const FormWrapper = ({
  title,
  description,
  icon,
  children,
}: FormWrapperProps) => (
  <FormWrapper.Wrapper>
    <FormWrapper.Icon>{icon}</FormWrapper.Icon>
    <FormWrapper.Title>{title}</FormWrapper.Title>
    <FormWrapper.Description>{description}</FormWrapper.Description>
    <div>{children}</div>
  </FormWrapper.Wrapper>
);

FormWrapper.Wrapper = styled.div`
  position: relative;
  margin-top: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.boldGray};
`;

FormWrapper.Icon = styled.div`
  position: absolute;
  left: -40px;
  top: 5px;
  color: ${(props) => props.theme.colors.grayishBlack};
  font-size: 25px;
`;

FormWrapper.Title = styled.div`
  font-size: 1.875rem;
  color: ${(props) => props.theme.colors.almostBlack};
`;

FormWrapper.Description = styled.div`
  margin-bottom: 20px;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.lightGray};
`;

export default FormWrapper;
