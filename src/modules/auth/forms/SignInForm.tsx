import { Button, Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

interface SignInFormProps {
  onFinish: (values: any) => void;
}

const SignInForm = ({ onFinish }: SignInFormProps) => (
  <Form name="signInForm" onFinish={onFinish}>
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input prefix={<UserOutlined />} placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password prefix={<LockOutlined />} placeholder="Password" />
    </Form.Item>
    <Form.Item>
      <Form.Item noStyle>
        <Checkbox checked>Remember me</Checkbox>
      </Form.Item>
      <SignInForm.ForgotPasswordLink href="">
        Forgot password
      </SignInForm.ForgotPasswordLink>
    </Form.Item>
    <Form.Item>
      <SignInForm.Button type="primary" htmlType="submit">
        Sign In
      </SignInForm.Button>
    </Form.Item>
  </Form>
);

SignInForm.Button = styled(Button)`
  width: 100%;
`;

SignInForm.ForgotPasswordLink = styled.a`
  float: right;
`;

export default SignInForm;
