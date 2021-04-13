import styled from 'styled-components';
import { Button, Input } from 'antd';

export const Nav = styled.nav`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 3.5rem;
  padding: 0 2rem;
  font-size: 1rem;
`;

export const UploadButton = styled(Button)`
  width: 8rem;
`;

export const Menu = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

export const LeftMenu = styled(Menu)`
  flex: 1;
`;

export const CenterMenu = styled(Menu)`
  flex: 2;
`;

export const RightMenu = styled(Menu)`
  flex: 2;
  justify-content: flex-end;
`;

export const SearchInput = styled(Input.Search)`
  /* width: 100%; */
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & + & {
    margin-left: 2rem;
  }
`;

export const CenterMenuItem = styled(MenuItem)`
  width: 100%;
`;
