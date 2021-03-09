import { PageHeader, Button } from 'antd';
import React, { ReactChild, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import FiltersBar from '@modules/event/components/FiltersBar';
import { BarsOutlined, CalendarOutlined } from '@ant-design/icons';

interface EventsPageWrapperProps {
  children: ReactChild;
  title: string | ReactNode;
}

const EventsWrapper = ({ children, title }: EventsPageWrapperProps) => {
  const history = useHistory();

  return (
    <EventsWrapper.Wrapper>
      <EventsWrapper.Header
        title={title}
        extra={[
          <Button key="1">
            <BarsOutlined />
          </Button>,
          <Button key="2">
            <CalendarOutlined />
          </Button>,
          <Button
            key="3"
            type="primary"
            onClick={() => history.push('/events/create')}
          >
            Create Event
          </Button>,
        ]}
      />
      <FiltersBar />
      <div>{children}</div>
    </EventsWrapper.Wrapper>
  );
};

EventsWrapper.Wrapper = styled.div`
  padding: 48px 62px;
  height: 100%;
`;

EventsWrapper.Header = styled(PageHeader)`
  padding: 35px 0;
`;

export default EventsWrapper;
