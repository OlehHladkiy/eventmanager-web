/* eslint-disable react/display-name */
import {
  Table,
  Descriptions,
  Empty,
  Image,
  Space,
  Statistic,
  Button,
} from 'antd';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';

import { MoreOutlined } from '@ant-design/icons';
import { EventStatus } from '@modules/event/models';
import { getEvents as getEventsSelector } from '@modules/event/Reducer';

const columns = [
  {
    title: 'Event',
    dataIndex: 'event',
    width: 900,
    key: 'event',
    render: (text: any, row: any) => {
      const date = new Date(row.date);
      return (
        <Space size="large">
          <p>{moment(date).format('D MMMM')}</p>
          {row.image !== null ? (
            <Image width={50} src={row.image} />
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}

          <Descriptions size="small" column={1}>
            <Descriptions.Item>{row.title}</Descriptions.Item>
            <Descriptions.Item>{row.type}</Descriptions.Item>
            <Descriptions.Item>
              {moment(date).format('MMMM Do YYYY, h:mm:ss a')}
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
    render: (text: any) => <Button icon={<MoreOutlined />}>{text}</Button>,
  },
];

const List = () => {
  const events: any[] = useSelector(getEventsSelector);
  const data = events.map((event: any) => {
    return {
      key: event.id,
      title: event.title,
      organizer: event.organizer,
      image: event.image,
      date: event.published_at,
      type: event.type,
      status: EventStatus.Draft,
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

export default List;
