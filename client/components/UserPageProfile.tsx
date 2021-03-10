import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import UserAvatar from '@components/UserAvatar';
import { IUser } from '@typings/IUser';

const UserIntro = styled(Typography.Paragraph)`
  padding-top: 20px;
  padding-left: 40px;
`;

interface Props {
  userData: IUser;
}

const UserPageProfile = ({ userData }: Props) => {
  return (
    <>
      <UserAvatar userData={userData} marginRight={8} size={100} type="title" />
      <UserIntro>{userData.introduction}</UserIntro>
    </>
  );
};

export default UserPageProfile;
