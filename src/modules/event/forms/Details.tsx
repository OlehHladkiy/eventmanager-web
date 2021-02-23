import { Form, Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

import Basic from './Basic';
import DateAndTime from './DateAndTime';
import Location from './Location';

interface DetailsProps {
  initialValues: Record<string, any>;
  isLoading: boolean;
  onFinish: (data: Record<string, any>) => void;
}

const Details = ({ initialValues, isLoading, onFinish }: DetailsProps) => (
  <Form
    name="detail"
    layout="vertical"
    initialValues={initialValues}
    onFinish={onFinish}
  >
    <Basic />
    <Location />
    <DateAndTime />
    <Details.Button loading={isLoading} htmlType="submit" type="primary">
      Submit
    </Details.Button>
  </Form>
);

Details.Button = styled(Button)`
  margin-top: 20px;
`;

export default Details;
