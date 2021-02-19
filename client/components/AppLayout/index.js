import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Row, Button, Typography } from 'antd';
import { BellOutlined, DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Router from 'next/router';
import useSWR from 'swr';
import DropdownUser from '../DropdownUser';

import useInput from '../hooks/useInput';
import fetcher from '../../util/fetcher';
import { LeftMenu, CenterMenu, RightMenu, MenuItem, CenterMenuItem, Nav, UploadButton, SearchInput } from './styles';
import DropdownCommunity from '../DropdownCommunity';

const { Text } = Typography;

const AppLayout = ({ children }) => {
  const [searchInput, onChangeSearchInput] = useInput('');

  const { data: userData } = useSWR('/api/user', fetcher);

  const onSearch = useCallback(() => {
    Router.push(`/tag/${searchInput}`);
  }, [searchInput]);

  return (
    <>
      <Nav>
        <LeftMenu>
          <MenuItem>
            <Link href="/">
              <a>
                <Text strong style={{ color: '#ff8634' }}>
                  유토피아
                </Text>
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/community">
              <a>
                <DropdownCommunity />
              </a>
            </Link>
          </MenuItem>
        </LeftMenu>
        <CenterMenu>
          <CenterMenuItem>
            <SearchInput value={searchInput} onChange={onChangeSearchInput} onSearch={onSearch} placeholder="보고싶은 태그를 검색해보세요!" />
          </CenterMenuItem>
        </CenterMenu>
        <RightMenu>
          <MenuItem>
            <Link href="/upload">
              <a>
                <UploadButton shape="round">
                  <Text strong>작품 업로드</Text>
                </UploadButton>
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <BellOutlined style={{ fontSize: 18, color: 'rgba(0, 0, 0, 0.7)' }} />
          </MenuItem>
          <MenuItem>
            {userData ? (
              <DropdownUser />
            ) : (
              <Link href="/login">
                <a>
                  <Text strong>로그인</Text>
                </a>
              </Link>
            )}
          </MenuItem>
        </RightMenu>
      </Nav>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
