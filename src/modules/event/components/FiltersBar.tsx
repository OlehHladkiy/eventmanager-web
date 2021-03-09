import { Row, Col } from 'antd';
import { Select } from 'antd';
import React from 'react';
import Search from 'antd/lib/input/Search';
import styled from 'styled-components';

import { SearchOutlined } from '@ant-design/icons';
import { EventStatus } from '@modules/event/models';

const FiltersBar = () => (
  <FiltersBar.Wrapper>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={8}>
        <Search
          placeholder="Search events"
          prefix={<SearchOutlined />}
          enterButton={false}
        />
      </Col>
      <Col span={8}>
        <FiltersBar.Select defaultValue={EventStatus.Draft}>
          <Select.Option value={EventStatus.Draft}>
            {EventStatus.Draft}
          </Select.Option>
          <Select.Option value={EventStatus.Option}>
            {EventStatus.Option}
          </Select.Option>
        </FiltersBar.Select>
      </Col>
      <Col span={8}>
        <FiltersBar.Select defaultValue={EventStatus.All}>
          <Select.Option value={EventStatus.All}>
            {EventStatus.All}
          </Select.Option>
          <Select.Option value={EventStatus.Part}>
            {EventStatus.Part}
          </Select.Option>
        </FiltersBar.Select>
      </Col>
    </Row>
  </FiltersBar.Wrapper>
);

FiltersBar.Select = styled(Select)`
  width: 100%;
`;

FiltersBar.Wrapper = styled.div`
  margin: 2%;
`;

export default FiltersBar;
