import React from 'react';
import { Avatar, Typography } from 'antd';
import styled from '@emotion/styled';
import { IUser } from '@typings/IUser';
import { AvatarSize } from 'antd/lib/avatar/SizeContext';
import { backUrl } from '@config/config';

// interface AvatarWrapperProps {
//   src: string;
//   size: number;
//   marginRight: number;
//   theme?: Theme | undefined;
// }

const AvatarWrapper = styled(Avatar)`
  ${({ marginRight }: { marginRight: number }) => marginRight && `margin-right: ${marginRight}px;`}
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
        src={userData.profile && `${backUrl}/${userData.profile}`}
        size={size}
        // @ts-ignore
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
