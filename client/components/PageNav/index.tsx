import Link from 'next/link';
import React from 'react';
import { Anc, Nav } from '@components/PageNav/styles';

interface Props {
  currentPage: string;
}

const index = ({ currentPage }: Props) => {
  return (
    <Nav>
      <ul>
        <li>
          <Link href="/">
            <Anc isCurrentPage={currentPage === 'Home'}>전체 작품</Anc>
          </Link>
        </li>
        <li>
          {/* <Link href="/followings"> */}
          <Anc isCurrentPage={currentPage === 'Followings'} onClick={() => alert('낼 만들거임')}>
            팔로우하는 유저의 작품
          </Anc>
          {/* </Link> */}
        </li>
      </ul>
    </Nav>
  );
};

export default index;
