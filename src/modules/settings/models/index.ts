import { lazy } from 'react';
import { UserOutlined, ContainerOutlined } from '@ant-design/icons';

export enum SettingType {
  User = 'user',
  Organization = 'organization',
}

export const MenuItems = [
  { key: SettingType.User, title: 'User settings', icon: UserOutlined },
  {
    key: SettingType.Organization,
    title: 'Organization settings',
    icon: ContainerOutlined,
  },
];

export const MenuContents = [
  {
    component: lazy(() => import('@modules/user/forms/UpdateForm')),
    key: SettingType.User,
    title: 'User',
  },
];
