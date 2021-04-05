import React, { useCallback } from 'react';
import { Typography, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Text } = Typography;

const DropdownCommunity = () => {
  const onClickReady = useCallback(() => {
    alert('준비 중ㅋ');
  }, []);
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={onClickReady}>커뮤니티</a>
      </Menu.Item>
      <Menu.Item>
        <Link href="/notices">
          <a>공지사항</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        {/* <Link href="/request"> */}
        <a onClick={onClickReady}>기능요청</a>
        {/* </Link> */}
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} overlayStyle={{ width: 120 }}>
      <div>
        <Text strong>커뮤니티&nbsp;</Text>
        <DownOutlined style={{ fontSize: 16, color: '#ff8634' }} />
      </div>
    </Dropdown>
  );
};

export default DropdownCommunity;
