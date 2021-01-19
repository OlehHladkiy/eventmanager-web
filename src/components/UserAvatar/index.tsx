import React from 'react';
import { Avatar } from 'antd';
import styled from 'styled-components';
import ColorHash from 'color-hash';

import { getShortName } from 'common/helpers/string-helpers';

interface StyledAvatarProps {
  color: string;
}

const StyledAvatar = styled(Avatar)<StyledAvatarProps>`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  .ant-avatar-string {
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  && {
    background-color: ${(props: any) => (props.color ? props.color : 'none')};
  }
`;

const colorHash = new ColorHash({
  lightness: 0.6,
  saturation: 0.75,
});

interface UserAvatarProps {
  name: string;
}

const UserAvatar = ({ name }: UserAvatarProps) => (
  <StyledAvatar
    shape="circle"
    color={colorHash.hex(name.toLowerCase())}
    size={40}
  >
    {getShortName(name)}
  </StyledAvatar>
);

export default UserAvatar;
