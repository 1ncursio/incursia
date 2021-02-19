import React from 'react';
import { Avatar, Typography } from 'antd';
import PropTypes from 'prop-types';
import UserAvatar from './UserAvatar';
import styled from 'styled-components';

const UserIntro = styled(Typography.Paragraph)`
  padding-top: 20px;
  padding-left: 40px;
`;

const UserPageProfile = ({ userData }) => {
  return (
    <>
      <UserAvatar userData={userData} marginRight={8} size={100} type="title" />
      <UserIntro>{userData.introduction}</UserIntro>
    </>
  );
};

UserPageProfile.propTypes = {
  userData: PropTypes.shape({
    profile: PropTypes.string,
    nickname: PropTypes.string,
    introduction: PropTypes.string,
  }).isRequired,
};

export default UserPageProfile;
