import React, { useEffect } from 'react';
import { Avatar, Button, Typography, Row, Col, Badge, Space } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import FollowButton from '@components/FollowButton';
import { IPost } from '@typings/IPost';

const CurrentPostCover = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`;

const { Text } = Typography;

interface Props {
  postData: IPost;
}

const UserProfile = ({ postData }: Props) => {
  const { data: userData } = useSWR('/api/user', fetcher);

  useEffect(() => {
    console.log(postData);
  }, []);
  const currentPostIndex = postData.User.Posts.findIndex((v) => v.id === postData.id);
  const prevAndCurrentAndNextPost = postData.User.Posts.filter((v, i) => Math.abs(i - currentPostIndex) <= 1);

  return (
    <Space direction="vertical">
      <Link href={`/user/${postData.User.id}/illustration`}>
        <a>
          <Avatar
            size={48}
            src={postData.User.profile && `http://localhost:3100/${postData.User.profile}`}
            style={{ marginRight: 8 }}
          >
            {!postData.User.profile && postData.User.nickname[0]}
          </Avatar>
          <Text>{postData.User.nickname}</Text>
        </a>
      </Link>
      {userData?.id !== postData.User.id ? (
        <FollowButton postData={postData} />
      ) : (
        <Button type="primary" shape="round" block onClick>
          작품 편집
        </Button>
      )}
      <Row gutter={8}>
        {prevAndCurrentAndNextPost.map((post) => (
          <Col span={8} key={post.id}>
            <Link href={`/illustration/${post.id}`}>
              <a>
                {post.id === postData.id ? <CurrentPostCover /> : null}
                <div style={{ width: '100%', height: 100 }}>
                  <img
                    src={`http://localhost:3100/${post.Images[0].src}`}
                    key={post.id}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                  />
                  <Badge
                    count={post.Images.length}
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      position: 'absolute',
                      right: '5px',
                      bottom: '25px',
                      boxShadow: 'none',
                    }}
                  />
                </div>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </Space>
  );
};

export default UserProfile;
