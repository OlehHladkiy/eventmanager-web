import { Form, Input, Radio } from 'antd';
import { CompassOutlined } from '@ant-design/icons';
import React from 'react';

import FormWrapper from '@components/FormWrapper';

import { EventLocationType } from '../models';

const Location = () => {
  const getFormItemByLocationType = (locationType: EventLocationType) => {
    switch (locationType) {
      case EventLocationType.Venue: {
        return (
          <Form.Item preserve={false} name="location_value">
            <Input placeholder="Search for a venue or address" />
          </Form.Item>
        );
      }
      case EventLocationType.Online: {
        return (
          <span>
            Online events have unique event pages where you can add links to
            livestreams and more
          </span>
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <FormWrapper
      title="Location"
      description="Help people in the area discover your event and let attendees know where to show up."
      icon={<CompassOutlined />}
    >
      <Form.Item name="location_type">
        <Radio.Group>
          <Radio.Button value={EventLocationType.Venue}>Venue</Radio.Button>
          <Radio.Button value={EventLocationType.Online}>Online</Radio.Button>
          <Radio.Button value={EventLocationType.WillAnnounce}>
            To be announced
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item shouldUpdate>
        {({ getFieldValue }) =>
          getFormItemByLocationType(getFieldValue('location_type'))
        }
      </Form.Item>
    </FormWrapper>
  );
};

export default Location;
