import React, { useCallback, useEffect } from 'react';
import { Dropdown, Avatar, Menu, Typography } from 'antd';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import useSWR from 'swr';
import { backUrl } from '@config/config';
import { fetcher } from '@utils/fetcher';
import UserAvatar from '@components/UserAvatar';
import { logoutRequestAction } from '../reducers/user';

const { Text } = Typography;

const DropdownUser = () => {
  const dispatch = useDispatch();

  const { logOutDone, logInDone } = useSelector((state: any) => state.user);

  const { data: userData, mutate } = useSWR('/api/user', fetcher);

  useEffect(() => {
    if (logOutDone) {
      mutate(null, false);
    }
  }, [logOutDone]);

  useEffect(() => {
    if (logInDone) {
      mutate(userData, false);
    }
  }, [logInDone]);

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  const menu = (
    <Menu>
      <Menu.Item disabled style={{ cursor: 'default' }}>
        <div>
          <Link href={`/user/${userData?.id}/illustration`}>
            <a>
              <Avatar src={userData?.profile ? `${backUrl}/${userData?.profile}` : null} size={64}>
                {userData?.profile ? null : userData?.nickname[0]}
              </Avatar>
            </a>
          </Link>
        </div>
        <div>
          <Link href={`/user/${userData?.id}/illustration`}>
            <a>
              <Text strong>{userData?.nickname}</Text>
            </a>
          </Link>
        </div>
        <div>
          <Text type="secondary">{userData?.email}</Text>
        </div>
      </Menu.Item>
      <Menu.Item>
        <Link href={`/user/${userData?.id}/followings`}>
          <a>
            <div>
              <Text type="secondary">팔로잉</Text>
              <Text style={{ float: 'right' }}>{userData?.Followings.length}</Text>
            </div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={`/user/${userData?.id}/followers`}>
          <a>
            <div>
              <Text type="secondary">팔로워</Text>
              <Text style={{ float: 'right' }}>{userData?.Followers.length}</Text>
            </div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/profile">
          <a>프로필 설정</a>
        </Link>
      </Menu.Item>
      <Menu.Item onClick={onLogout}>
        <LogoutOutlined />
        로그아웃
      </Menu.Item>
    </Menu>
  );

  return (
    userData && (
      <Dropdown overlay={menu} placement="bottomCenter" overlayStyle={{ width: 180 }}>
        <a>
          <UserAvatar userData={userData} size="large" marginRight={4} visibleNickname={false} />
          <DownOutlined style={{ fontSize: 10, color: '#ff8634' }} />
        </a>
      </Dropdown>
    )
  );
};

export default DropdownUser;
