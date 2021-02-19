import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Divider } from 'antd';
import useSWR from 'swr';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import fetcher from '../util/fetcher';

const DividerHeader = styled.div`
  height: 80px;
  line-height: 80px;
  margin-bottom: 10px;
  background: #495057;
  h1 {
    color: #ffffff;
  }
`;

const Home = () => {
  const { hasMorePosts } = useSelector((state) => state.post);

  const { data: userData } = useSWR('/api/user', fetcher);
  const { data: postsData } = useSWR('/api/posts?lastId=0', fetcher);
  const { data: followingsPostsData } = useSWR('/api/posts/followings/?lastId=0', fetcher);

  return (
    <AppLayout>
      <DividerHeader>
        <Row justify="center" gutter={16}>
          <Col span={18}>
            <h1>전체 작품</h1>
          </Col>
        </Row>
      </DividerHeader>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          <Row gutter={[8, 8]}>
            {postsData?.map((post) => (
              <Col span={4} key={post.id}>
                <PostCard key={post.id} post={post} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <DividerHeader>
        <Row justify="center" gutter={16}>
          <Col span={18}>
            <h1>팔로우하는 유저의 작품</h1>
          </Col>
        </Row>
      </DividerHeader>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          <Row gutter={[8, 8]}>
            {userData &&
              followingsPostsData?.map((post) => (
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

// Home.propTypes = {
//   user: PropTypes.shape({
//     id: PropTypes.number,
//     nickname: PropTypes.string,
//     email: PropTypes.string,
//     introduction: PropTypes.string,
//     profile: PropTypes.string,
//     Followers: PropTypes.arrayOf(PropTypes.object),
//     Followings: PropTypes.arrayOf(PropTypes.object),
//   }).isRequired,
// };

export default Home;
