import { Form, Input, Select } from 'antd';
import { FontSizeOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

import FormWrapper from '@components/FormWrapper';

import { EVENT_TYPE_OPTIONS, EVENT_CATEGORY_OPTIONS } from '../models';

const Basic = () => (
  <FormWrapper
    title="Basic Info"
    description="Name your event and tell event-goers why they should come. Add details that highlight what makes it unique."
    icon={<FontSizeOutlined />}
  >
    <Form.Item
      label="Title"
      rules={[{ required: true, message: 'Please enter title...' }]}
      name="title"
    >
      <Input placeholder="Enter a title" />
    </Form.Item>
    <Form.Item
      label="Organizer"
      rules={[{ required: true, message: 'Please enter organizer...' }]}
      name="organizer"
    >
      <Input placeholder="Enter a organizer" />
    </Form.Item>
    <Basic.OneLineWrapper>
      <Form.Item label="Type" name="type">
        <Basic.Select
          placeholder="Select a type"
          options={EVENT_TYPE_OPTIONS}
        />
      </Form.Item>
      <Form.Item label="Category" name="category">
        <Basic.Select
          placeholder="Select a category"
          options={EVENT_CATEGORY_OPTIONS}
        />
      </Form.Item>
    </Basic.OneLineWrapper>
  </FormWrapper>
);

Basic.OneLineWrapper = styled.div`
  width: 100%;
  display: flex;
`;

Basic.Select = styled(Select)`
  && {
    margin-right: 20px;
    width: 180px;
  }
`;

export default Basic;
