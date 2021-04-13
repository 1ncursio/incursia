import React from 'react';
import { Typography } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { IPost } from '@typings/IPost';
import UserAvatar from '@components/UserAvatar';

const TitleWrapper = styled.div`
  margin-bottom: 5px;
`;

const CoverImage = styled.img`
  width: 350px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const { Text } = Typography;

interface Props {
  post: IPost;
  avatarVisible?: boolean;
}

const PostCard = ({ post, avatarVisible = true }: Props) => {
  return (
    <>
      <Link href={`/illustration/${post.id}`} prefetch={false}>
        <a>
          <CoverImage alt={post.title} src={`${post.Images[0].src}`} />
        </a>
      </Link>
      <TitleWrapper>
        <Link href={`/illustration/${post.id}`} prefetch={false}>
          <a>
            <Text strong>{post.title}</Text>
          </a>
        </Link>
      </TitleWrapper>
      {avatarVisible && (
        <Link href={`/user/${post.User.id}/illustration`} prefetch={false}>
          <a>
            <UserAvatar userData={post.User} marginRight={4} />
          </a>
        </Link>
      )}
    </>
  );
};

export default PostCard;
