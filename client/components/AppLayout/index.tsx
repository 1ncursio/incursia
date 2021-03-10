import { BellOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import React, { useCallback } from 'react';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import DropdownCommunity from '@components/DropdownCommunity';
import DropdownUser from '@components/DropdownUser';
import useInput from '@hooks/useInput';
import { CenterMenu, CenterMenuItem, LeftMenu, MenuItem, Nav, RightMenu, SearchInput, UploadButton } from '@components/AppLayout/styles';

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

export default AppLayout;