import { Row, Col, Select } from 'antd';
import Search from 'antd/lib/input/Search';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

const onSearch = (value: string) => {
  console.log(value);
};

const SettingsBar = () => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: '0' }}>
      <Col span={8}>
        <Search
          placeholder="Search events"
          onSearch={onSearch}
          prefix={<SearchOutlined />}
          enterButton={false}
        />
      </Col>
      <Col span={8}>
        <Select style={{ width: '100%' }} defaultValue="Draft">
          <Select.Option value="Draft">Draft</Select.Option>
          <Select.Option value="Option">Option</Select.Option>
        </Select>
      </Col>
      <Col span={8}>
        <Select style={{ width: '100%' }} defaultValue="All">
          <Select.Option value="All">All</Select.Option>
          <Select.Option value="Part">Part</Select.Option>
        </Select>
      </Col>
    </Row>
  );
};

export default SettingsBar;
