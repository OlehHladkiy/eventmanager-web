import { Menu } from 'antd';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Breakpoint } from '@theme/index';

import SettingsContent from '../components/SettingsContent';
import { MenuItems } from '../models';

const SettingsPage = () => {
  const { settingsId }: any = useParams();
  const history = useHistory();

  const onClick = ({ key }: any) => {
    history.push(`/settings/${key}`);
  };

  return (
    <SettingsPage.Wrapper>
      <Menu
        theme="light"
        mode="inline"
        onClick={onClick}
        selectedKeys={[settingsId]}
      >
        {MenuItems.map(({ key, title, icon: Icon }) => (
          <Menu.Item key={key} icon={<Icon />}>
            {title}
          </Menu.Item>
        ))}
      </Menu>
      <SettingsContent settingsId={settingsId} />
    </SettingsPage.Wrapper>
  );
};

SettingsPage.Wrapper = styled.div`
  padding: 40px 2%;
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  height: 100%;
  width: 100%;

  @media (min-width: ${Breakpoint.Lg}) {
    padding: 40px 5%;
  }

  @media (min-width: ${Breakpoint.Md}) {
    padding: 40px 10%;
  }

  @media (min-width: ${Breakpoint.Xl}) {
    padding: 40px 20%;
  }
`;

export default SettingsPage;
