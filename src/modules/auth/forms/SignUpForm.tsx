import { Button, Form, Input } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  IdcardOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SignUpFormProps {
  isCheckingEmail: boolean;
  onCheckEmail: any;
  onFinish: (values: any) => void;
}

const SignUpForm = ({
  isCheckingEmail,
  onCheckEmail,
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
    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password prefix={<LockOutlined />} placeholder="Password" />
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

export default SignUpForm;
