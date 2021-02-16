import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import Link from 'next/link';
import moment from 'moment';
import styled from 'styled-components';
import UserAvatar from './UserAvatar';

const TitleWrapper = styled.div`
  margin-bottom: 5px;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

moment.locale('ko');

const { Text, Title } = Typography;

const PostCard = ({ post, avatarVisible }) => {
  return (
    <>
      <Link href={`/illustration/${post.id}`}>
        <a>
          <CoverImage alt={post.title} src={`http://localhost:3100/${post.Images[0].src}`} />
        </a>
      </Link>
      <TitleWrapper>
        <Link href={`/illustration/${post.id}`}>
          <a>
            <Text strong>{post.title}</Text>
          </a>
        </Link>
      </TitleWrapper>
      {avatarVisible && (
        <Link href={`/user/${post.User.id}/illustration`}>
          <a>
            <UserAvatar userData={post.User} marginRight={4} />
          </a>
        </Link>
      )}
    </>
  );
};

PostCard.defaultProps = {
  avatarVisible: true,
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    title: PropTypes.string,
    caption: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    Tags: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  avatarVisible: PropTypes.bool,
};

export default PostCard;
