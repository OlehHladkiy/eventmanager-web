import { Form, Button, FormInstance } from 'antd';
import * as R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import Basic from './Basic';
import DateAndTime from './DateAndTime';
import Location from './Location';
import { DetailsFormValues } from '../models';
import { normalizeDetailsFormValues } from '../helpers';

interface DetailsProps {
  form?: FormInstance;
  initialValues?: Record<string, any>;
  isLoading: boolean;
  onFinish: (data: Record<string, any>) => void;
}

const Details = ({
  form,
  initialValues = {},
  isLoading,
  onFinish,
}: DetailsProps) => (
  <Form
    form={form}
    name="detail"
    layout="vertical"
    initialValues={initialValues}
    onFinish={(data: DetailsFormValues) =>
      R.compose(onFinish, normalizeDetailsFormValues)(data)
    }
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
