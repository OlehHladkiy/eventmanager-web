import { Row, Col } from 'antd';
import { Select as AntdSelect } from 'antd';
import React from 'react';
import Search from 'antd/lib/input/Search';
import styled from 'styled-components';

import { SearchOutlined } from '@ant-design/icons';
import { EventStatus } from '@modules/event/models';

const { Option } = AntdSelect;

const onSearch = (value: string) => {
  console.log(value);
};

const FiltersBar = () => {
  return (
    <FiltersBar.Wrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <Search
            placeholder="Search events"
            onSearch={onSearch}
            prefix={<SearchOutlined />}
            enterButton={false}
          />
        </Col>
        <Col span={8}>
          <Select defaultValue={EventStatus.Draft}>
            <Option value={EventStatus.Draft}>{EventStatus.Draft}</Option>
            <Option value={EventStatus.Option}>{EventStatus.Option}</Option>
          </Select>
        </Col>
        <Col span={8}>
          <Select defaultValue={EventStatus.All}>
            <Option value={EventStatus.All}>{EventStatus.All}</Option>
            <Option value={EventStatus.Part}>{EventStatus.Part}</Option>
          </Select>
        </Col>
      </Row>
    </FiltersBar.Wrapper>
  );
};

const Select = ({ ...props }) => {
  const select = <SelectStyled {...props} />;
  return select;
};

const SelectStyled = styled(AntdSelect)`
  width: 100%;
`;

FiltersBar.Wrapper = styled.div`
  margin: 2%;
`;

export default FiltersBar;
