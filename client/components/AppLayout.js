import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Button, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Router from 'next/router';
import useSWR from 'swr';
import DropdownUser from './DropdownUser';

import useInput from './hooks/useInput';
import fetcher from '../util/fetcher';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const { Text } = Typography;

const AppLayout = ({ children }) => {
  const [searchInput, onChangeSearchInput] = useInput('');

  const { data: userData } = useSWR('/api/user', fetcher);

  const onSearch = useCallback(() => {
    Router.push(`/tag/${searchInput}`);
  }, [searchInput]);

  return (
    <div>
      <Menu mode="horizontal" selectable={false}>
        <Menu.Item>
          <Link href="/">
            <a>유토피아</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton value={searchInput} onChange={onChangeSearchInput} onSearch={onSearch} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/">
            <a>공지사항</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/upload">
            <a>
              <Button shape="round" style={{ width: 120 }}>
                <Text strong>작품 업로드</Text>
              </Button>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <BellOutlined />
        </Menu.Item>
        <Menu.Item>
          {userData ? (
            <DropdownUser />
          ) : (
            <Link href="/login">
              <a>
                <Button shape="round">로그인</Button>
              </a>
            </Link>
          )}
        </Menu.Item>
      </Menu>
      <Row justify="center" gutter={16}>
        {children}
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
