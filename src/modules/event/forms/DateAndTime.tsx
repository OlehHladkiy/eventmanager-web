import { DatePicker, Form, Radio } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import React from 'react';

import FormWrapper from '@components/FormWrapper';

import { EventScheduleType } from '../models';

const DateAndTime = () => (
  <FormWrapper
    title="Date and time"
    description="ell event-goers when your event starts and ends so they can make plans to attend."
    icon={<CalendarOutlined />}
  >
    <Form.Item name="schedule_type">
      <Radio.Group>
        <Radio.Button value={EventScheduleType.Single}>
          Single Event
        </Radio.Button>
        <Radio.Button value={EventScheduleType.Recurring}>
          Recurring Events
        </Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item name="date">
      <DatePicker.RangePicker
        showTime={{ showHour: true, showMinute: true, showSecond: false }}
      />
    </Form.Item>
  </FormWrapper>
);

export default DateAndTime;
