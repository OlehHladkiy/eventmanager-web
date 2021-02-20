import { Button, Form, Input } from 'antd';
import { IdcardOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { signUp, SignUpData } from '../Actions';
import EmailFormItem from '../components/EmailFormItem';
import PasswordFormItem from '../components/PasswordFormItem';

const SignUp = () => {
  const dispatch = useDispatch();

  const onFinish = (data: SignUpData) => {
    dispatch(signUp(data));
  };

  return (
    <Form name="signUpForm" onFinish={onFinish}>
      <EmailFormItem />
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
      <PasswordFormItem />
      <Form.Item>
        <SignUp.Button type="primary" htmlType="submit">
          Sign Up
        </SignUp.Button>
        Already registered <Link to="/signin">Sign in now</Link>
      </Form.Item>
    </Form>
  );
};

SignUp.Button = styled(Button)`
  width: 100%;
`;

SignUp.PasswordItem = styled(Form.Item)`
  margin-bottom: 0;
`;

export default SignUp;
