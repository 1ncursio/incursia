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
          <Link href="/">
            <Anc isCurrentPage={currentPage === 'Following'}>팔로우하는 유저의 작품</Anc>
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default index;
