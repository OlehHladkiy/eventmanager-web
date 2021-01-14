import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, IdcardOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

interface SignUpFormProps {
  onFinish: (values: any) => void;
}

const SignUpForm = ({ onFinish }: SignUpFormProps) => (
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
      ]}
    >
      <Input prefix={<UserOutlined />} placeholder="Email" />
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
    </Form.Item>
  </Form>
);

SignUpForm.Button = styled(Button)`
  width: 100%;
`;

export default SignUpForm;
