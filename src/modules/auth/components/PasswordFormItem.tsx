import { Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

import PasswordBar from '@components/PasswordBar';

import { testPasswordStrength } from '../helpers';

interface PasswordFormItemProps {
  required?: boolean;
}

const PasswordFormItem = ({ required = true }: PasswordFormItemProps) => {
  const onValidatePassword = async (_: any, password: string) => {
    const { error } = testPasswordStrength(password);

    if (!!error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <PasswordFormItem.PasswordItem
        name="password"
        rules={[
          { required, message: 'Please input your password!' },
          {
            validator: onValidatePassword,
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </PasswordFormItem.PasswordItem>
      <Form.Item dependencies={['password']}>
        {({ getFieldValue }) => (
          <PasswordBar password={getFieldValue('password')} />
        )}
      </Form.Item>
    </>
  );
};

PasswordFormItem.PasswordItem = styled(Form.Item)`
  margin-bottom: 0;
`;

export default PasswordFormItem;
