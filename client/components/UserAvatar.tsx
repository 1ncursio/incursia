import React from 'react';
import { Avatar, Typography } from 'antd';
import styled from 'styled-components';
import { IUser } from '@typings/IUser';
import { AvatarSize } from 'antd/lib/avatar/SizeContext';

const AvatarWrapper = styled(Avatar)`
  margin-right: ${(props) => props.marginRight}px;
`;

const { Text, Title } = Typography;

interface Props {
  userData: IUser;
  marginRight?: number;
  size?: AvatarSize;
  type?: string;
  level?: 5 | 1 | 2 | 3 | 4;
  visibleNickname?: boolean;
}

const UserAvatar = ({
  userData,
  marginRight = 0,
  size = 'default',
  type = 'text',
  level = 3,
  visibleNickname = true,
}: Props) => {
  return (
    <>
      <AvatarWrapper
        src={userData.profile && `http://localhost:3100/${userData.profile}`}
        size={size}
        marginRight={marginRight}
      >
        {!userData.profile && userData.nickname[0]}
      </AvatarWrapper>
      {type === 'text' && visibleNickname && <Text>{userData.nickname}</Text>}
      {type === 'title' && visibleNickname && (
        <Title level={level} style={{ display: 'inline-block' }}>
          {userData.nickname}
        </Title>
      )}
    </>
  );
};

export default UserAvatar;
