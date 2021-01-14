import { Button, Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';
import {
  UserOutlined,
  LockOutlined,
  IdcardOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SignUpData } from '../AuthActions';

import PasswordBar from '@components/PasswordBar';

interface SignUpFormProps {
  isCheckingEmail: boolean;
  onCheckEmail: (rule: Rule, value: string) => Promise<any>;
  onValidatePassword: (rule: Rule, value: string) => Promise<any>;
  onFinish: (values: SignUpData) => void;
}

const SignUpForm = ({
  isCheckingEmail,
  onCheckEmail,
  onValidatePassword,
  onFinish,
}: SignUpFormProps) => (
  <Form name="signUpForm" onFinish={onFinish}>
    <Form.Item
      name="email"
      validateTrigger="onBlur"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
        {
          type: 'email',
          message: 'Please enter the correct email value!',
        },
        {
          validator: onCheckEmail,
        },
      ]}
    >
      <Input
        prefix={<UserOutlined />}
        suffix={isCheckingEmail && <LoadingOutlined />}
        placeholder="Email"
      />
    </Form.Item>
    <Form.Item
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input prefix={<IdcardOutlined />} placeholder="Name" />
    </Form.Item>
    <SignUpForm.PasswordItem
      name="password"
      rules={[
        { required: true, message: 'Please input your password!' },
        {
          validator: onValidatePassword,
        },
      ]}
    >
      <Input.Password prefix={<LockOutlined />} placeholder="Password" />
    </SignUpForm.PasswordItem>
    <Form.Item dependencies={['password']}>
      {({ getFieldValue }) => (
        <PasswordBar password={getFieldValue('password')} />
      )}
    </Form.Item>
    <Form.Item>
      <SignUpForm.Button type="primary" htmlType="submit">
        Sign Up
      </SignUpForm.Button>
      Already registered <Link to="/signin">Sign in now</Link>
    </Form.Item>
  </Form>
);

SignUpForm.Button = styled(Button)`
  width: 100%;
`;

SignUpForm.PasswordItem = styled(Form.Item)`
  margin-bottom: 0;
`;

export default SignUpForm;
