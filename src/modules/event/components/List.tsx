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
import { getTableEvents } from '@modules/event/Reducer';

const columns = [
  {
    title: 'Event',
    dataIndex: 'event',
    width: 900,
    key: 'event',
    render: (_: any, row: any) => {
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
    render: (_: any, row: any) => {
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
    render: (_: any, row: any) => {
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
    render: (text: string) => <Button icon={<MoreOutlined />}>{text}</Button>,
  },
];

const List = () => {
  const events: any[] = useSelector(getTableEvents);

  return (
    <Table
      columns={columns}
      dataSource={events}
      size="small"
      pagination={false}
    />
  );
};

export default List;
