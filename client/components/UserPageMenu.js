import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';

const UserPageMenu = ({ current, userId }) => {
  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <Menu.Item key="illustration">
        <Link href={`/user/${userId}/illustration`}>
          <a>일러스트</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="followings">
        <Link href={`/user/${userId}/followings`}>
          <a>팔로잉</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="followers">
        <Link href={`/user/${userId}/followers`}>
          <a>팔로워</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

UserPageMenu.propTypes = {
  current: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default UserPageMenu;
