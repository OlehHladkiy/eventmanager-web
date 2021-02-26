import { Layout, Menu } from 'antd';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { EventManageItem } from '../models';
import ManageContent from '../components/ManageContent';

const { Sider } = Layout;

const Manage = () => {
  const { id, page }: { id: string; page: string } = useParams();
  const history = useHistory();

  return (
    <Manage.Wrapper>
      <Manage.Sider theme="light">
        <Menu
          selectedKeys={[page]}
          onClick={({ key }) => history.push(`/events/${id}/${key}`)}
          mode="inline"
        >
          <Menu.Item key={EventManageItem.Details}>Details</Menu.Item>
          <Menu.Item key={EventManageItem.Basic}>Basic Info</Menu.Item>
          <Menu.Item key={EventManageItem.Publish}>Publish</Menu.Item>
        </Menu>
      </Manage.Sider>
      <ManageContent />
    </Manage.Wrapper>
  );
};

Manage.Wrapper = styled(Layout)`
  height: 100%;
`;

Manage.Sider = styled(Sider)`
  * {
    width: 270px;
    background-color: #f8f7fa;
  }
`;

export default Manage;
