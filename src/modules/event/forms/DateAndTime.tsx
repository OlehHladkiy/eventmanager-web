import { DatePicker, Form, Radio } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import React from 'react';

import FormWrapper from '@components/FormWrapper';

import { EventScheduleType } from '../models';

const DateAndTime = () => {
  const getFormItemByScheduleType = (scheduleType: EventScheduleType) => {
    switch (scheduleType) {
      case EventScheduleType.Single: {
        return (
          <>
            <Form.Item name="starts_at">
              <DatePicker />
            </Form.Item>
            <Form.Item name="ends_at">
              <DatePicker />
            </Form.Item>
          </>
        );
      }
      default: {
        return (
          <span>
            If your event repeats or occurs more than once, you can schedule
            additional times and dates in the Schedule tab. Event details and
            ticket types will automatically appear on all event occurrences and
            can&apos;t be customized for an individual occurrence.
          </span>
        );
      }
    }
  };

  return (
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
      <Form.Item shouldUpdate>
        {({ getFieldValue }) =>
          getFormItemByScheduleType(getFieldValue('schedule_type'))
        }
      </Form.Item>
    </FormWrapper>
  );
};

export default DateAndTime;
