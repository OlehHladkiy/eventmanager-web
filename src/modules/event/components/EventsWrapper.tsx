import { PageHeader, Button } from 'antd';
import React, { ReactChild, ReactNode } from 'react';
import styled from 'styled-components';

import FiltersBar from '@modules/event/components/FiltersBar';
import { BarsOutlined, CalendarOutlined } from '@ant-design/icons';

interface EventsPageWrapperProps {
  children: ReactChild;
  title: string | ReactNode;
}

const EventsWrapper = ({ children, title }: EventsPageWrapperProps) => (
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
    <FiltersBar />
    <EventsWrapper.Content>{children}</EventsWrapper.Content>
  </div>
);

EventsWrapper.Content = styled.div`
  padding: 14px 16px;
`;

export default EventsWrapper;
