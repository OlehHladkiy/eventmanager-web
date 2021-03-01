import React, { ReactChild, ReactNode } from 'react';
import { PageHeader, Button } from 'antd';
import { BarsOutlined, CalendarOutlined } from '@ant-design/icons';

import SettingsBar from '@modules/event/components/SettingsBar';

interface EventsPageWrapperProps {
  children: ReactChild;
  title: string | ReactNode;
}

const EventsWrapper = ({ children, title }: EventsPageWrapperProps) => {
  return (
    <div>
      <PageHeader
        title={title}
        extra={[
          <Button key="1">
            <BarsOutlined />
          </Button>,
          <Button key="2">
            <CalendarOutlined />
          </Button>,
          <Button key="3" type="primary">
            Create Event
          </Button>,
        ]}
      />
      <SettingsBar />
      <div style={{ padding: '14px 16px' }}>{children}</div>
    </div>
  );
};

export default EventsWrapper;
