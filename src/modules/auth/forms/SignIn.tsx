import { Button, Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { signIn, SignInData } from '../Actions';

const SignIn = () => {
  const dispatch = useDispatch();

  const onFinish = (data: SignInData) => {
    dispatch(signIn(data));
  };

  return (
    <Form
      name="signInForm"
      initialValues={{
        email: 'admin@gmail.com',
        password: 'Superstrong1!',
      }}
      onFinish={onFinish}
    >
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
        <SignIn.ForgotPasswordLink href="">
          Forgot password
        </SignIn.ForgotPasswordLink>
      </Form.Item>
      <Form.Item>
        <SignIn.Button type="primary" htmlType="submit">
          Sign In
        </SignIn.Button>
        <Link to="/signup">Sign up now</Link>
      </Form.Item>
    </Form>
  );
};

SignIn.Button = styled(Button)`
  width: 100%;
`;

SignIn.ForgotPasswordLink = styled.a`
  float: right;
`;

export default SignIn;
