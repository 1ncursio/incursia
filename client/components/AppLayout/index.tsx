import { BellOutlined, UploadOutlined } from '@ant-design/icons';
import { Input, Typography } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import DropdownCommunity from '@components/DropdownCommunity';
import DropdownUser from '@components/DropdownUser';
import useInput from '@hooks/useInput';
import {
  CenterMenu,
  CenterMenuItem,
  LeftMenu,
  MenuItem,
  Nav,
  RightMenu,
  UploadButton,
} from '@components/AppLayout/styles';

const { Text } = Typography;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
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
                <Text
                  strong
                  css={css`
                    color: #ff8634;
                  `}
                >
                  Incursia
                </Text>
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <a>
              <DropdownCommunity />
            </a>
          </MenuItem>
        </LeftMenu>
        <CenterMenu>
          <CenterMenuItem>
            <Input.Search
              value={searchInput}
              onChange={onChangeSearchInput}
              onSearch={onSearch}
              placeholder="보고싶은 태그를 검색해보세요!"
            />
          </CenterMenuItem>
        </CenterMenu>
        <RightMenu>
          <MenuItem>
            <Link href="/upload">
              <a>
                <UploadButton shape="round">
                  <Text strong>
                    <UploadOutlined />
                    &nbsp; 작품 업로드
                  </Text>
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

export default AppLayout;
