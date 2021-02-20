import { Button, Form, Input } from 'antd';
import { IdcardOutlined } from '@ant-design/icons';
import * as R from 'ramda';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsLoading } from '@modules/app-settings/Actions';
import { getIsLoading } from '@modules/app-settings/Reducer';
import EmailFormItem from '@modules/auth/components/EmailFormItem';

import { updateMe } from '../Actions';
import { getUser } from '../Reducer';
import { UserData } from '../models';

const Update = () => {
  const user: any = useSelector(getUser);
  const isLoading: boolean = useSelector(getIsLoading);

  const dispatch = useDispatch();

  const initialValues = R.pick(['email', 'name'], user);

  const onFinish = (data: UserData) => {
    if (!R.equals(data, initialValues)) {
      dispatch(setIsLoading(true));

      dispatch(updateMe({ id: user?.id, data }));

      dispatch(setIsLoading(false));
    }
  };

  return (
    <Form
      initialValues={initialValues}
      name="updateUserForm"
      onFinish={onFinish}
    >
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
      <Form.Item>
        <Button loading={isLoading} htmlType="submit" type="primary">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Update;
