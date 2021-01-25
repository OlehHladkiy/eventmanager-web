import { Form, Input } from 'antd';
import { UserOutlined, LoadingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import * as ApiService from '@modules/user/services/apiService';

const EmailFormItem = () => {
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  const onCheckEmail = async (_: any, email: string) => {
    setIsCheckingEmail(true);
    const response = await ApiService.isEmailExists(email);
    setIsCheckingEmail(false);

    if (response.data) {
      throw new Error('Email already exists!');
    }
  };

  return (
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
  );
};

export default EmailFormItem;
