import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Divider } from 'antd';
import useSWR from 'swr';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import { fetcher } from '../util/fetcher';

const NoticesPage = () => {
  const { hasMorePosts } = useSelector((state) => state.post);

  const { data: userData } = useSWR('/api/user', fetcher);
  const { data: postsData } = useSWR('/api/posts?lastId=0', fetcher);

  return (
    <AppLayout>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          <Row gutter={[8, 8]}>
            <Divider orientation="left">전체 작품</Divider>
            {postsData?.map((post) => (
              <Col span={4} key={post.id}>
                <PostCard key={post.id} post={post} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default NoticesPage;
