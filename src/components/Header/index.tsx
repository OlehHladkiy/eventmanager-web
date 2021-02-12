import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { getShortName } from 'common/helpers/string-helpers';
import { signOut } from '@modules/auth/AuthActions';
import { getIsFullSize } from '@modules/router/helpers';
import { getUser } from '@modules/user/UserReducer';
import { UserData } from '@modules/user/models';
import useHovered from 'common/hooks/useHovered';
import UserAvatar from '@components/UserAvatar';
import { SettingType } from '@modules/settings/models';

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const user: UserData = useSelector(getUser);
  const [ref, isHovered]: any = useHovered();

  const dispatch = useDispatch();

  if (getIsFullSize(location)) {
    return null;
  }

  return (
    <Header.Wrapper>
      <Header.Logo to="/">EventMe</Header.Logo>
      <Header.UserMenu ref={ref} isHovered={isHovered}>
        <Dropdown
          trigger={['click']}
          overlay={
            <Menu>
              <Menu.Item
                onClick={() => history.push(`/settings/${SettingType.User}`)}
              >
                Settings
              </Menu.Item>
              <Menu.Item onClick={() => dispatch(signOut())}>
                Sign Out
              </Menu.Item>
            </Menu>
          }
        >
          <Header.DropdownContent>
            <UserAvatar name={getShortName(user?.name)} />
            <Header.IconWrapper>
              <DownOutlined />
            </Header.IconWrapper>
          </Header.DropdownContent>
        </Dropdown>
      </Header.UserMenu>
    </Header.Wrapper>
  );
};

Header.Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.colors.grayishBlue};
`;

Header.Logo = styled(Link)`
  padding-top: 2px;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  font-family: 'Gill Sans', cursive;
`;

interface UserMenuProps {
  readonly isHovered: boolean;
}

Header.UserMenu = styled.div<UserMenuProps>`
  position: relative;
  height: 100%;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: ${(props) => (props.isHovered ? '0.1' : '0')};
  }
`;

Header.DropdownContent = styled.div`
  position: relative;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

Header.IconWrapper = styled.span`
  margin-left: 10px;
  color: ${(props) => props.theme.colors.white};
`;

export default Header;
