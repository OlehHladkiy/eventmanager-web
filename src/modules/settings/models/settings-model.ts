import { lazy } from 'react';
import { UserOutlined, ContainerOutlined } from '@ant-design/icons';

export enum Setting {
  User = 'user',
  Organization = 'organization',
}

export const MenuItems = [
  { key: Setting.User, title: 'User settings', icon: UserOutlined },
  {
    key: Setting.Organization,
    title: 'Organization settings',
    icon: ContainerOutlined,
  },
];

export const MenuContents = [
  {
    component: lazy(() => import('@modules/user/forms/UpdateForm')),
    key: Setting.User,
    title: 'User',
  },
];
