import React from 'react';
import {
  Table,
  Descriptions,
  Empty,
  Image,
  Space,
  Statistic,
  Button,
} from 'antd';
import dateformat from 'dateformat';
import { MoreOutlined } from '@ant-design/icons';

const EventsTable = (events: any) => {
  const columns = [
    {
      title: 'Event',
      dataIndex: 'event',
      width: 900,
      key: 'event',
      // eslint-disable-next-line react/display-name
      render: (text: any, row: any) => {
        const date = new Date(row.date);
        return (
          <Space size="large">
            <p>{dateformat(date, 'd mmmm')}</p>
            {row.image !== null ? (
              <Image width={50} src={row.image} />
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}

            <Descriptions size="small" column={1}>
              <Descriptions.Item>{row.title}</Descriptions.Item>
              <Descriptions.Item>{row.type}</Descriptions.Item>
              <Descriptions.Item>
                {dateformat(row.date, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
              </Descriptions.Item>
            </Descriptions>
          </Space>
        );
      },
    },
    {
      title: 'Sold',
      dataIndex: 'sold',
      key: 'sold',
      // eslint-disable-next-line react/display-name
      render: (text: any, row: any) => {
        return (
          <>
            <Statistic value={row === Number ? row : 0} suffix="/ 0" />
            <Statistic value={100} loading />
          </>
        );
      },
    },
    {
      title: 'Gross',
      dataIndex: 'gross',
      key: 'gross',
      // eslint-disable-next-line react/display-name
      render: (text: any, row: any) => {
        return (
          <>
            <Statistic
              value={row === Number ? row : 0}
              precision={2}
              prefix="$"
            />
          </>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      dataIndex: 'button',
      key: 'button',
      // eslint-disable-next-line react/display-name
      render: (text: any) => <Button icon={<MoreOutlined />}>{text}</Button>,
    },
  ];

  const data = events.events.map((event: any) => {
    return {
      key: event.id,
      title: event.title,
      organizer: event.organizer,
      image: event.image,
      date: event.published_at,
      type: event.type,
      status: 'Draft',
    };
  });
  return (
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      pagination={false}
    />
  );
};

EventsTable.displayName = 'EventsTable';

export default EventsTable;
