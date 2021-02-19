import React from 'react';
import { Avatar, Typography } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AvatarWrapper = styled(Avatar)`
  margin-right: ${(props) => props.marginRight}px;
`;

const { Text, Title } = Typography;

const UserAvatar = ({ userData, marginRight, size, type, level, visibleNickname }) => {
  return (
    <>
      <AvatarWrapper src={userData.profile && `http://localhost:3100/${userData.profile}`} marginRight={marginRight} size={size}>
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

UserAvatar.defaultProps = {
  marginRight: 0,
  size: 'default',
  type: 'text',
  level: 3,
  visibleNickname: true,
};

UserAvatar.propTypes = {
  userData: PropTypes.shape({
    profile: PropTypes.string,
    nickname: PropTypes.string,
  }).isRequired,
  marginRight: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  level: PropTypes.number,
  visibleNickname: PropTypes.bool,
};

export default UserAvatar;
