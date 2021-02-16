import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Divider } from 'antd';
import useSWR from 'swr';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import fetcher from '../util/fetcher';

const Home = () => {
  const { hasMorePosts } = useSelector((state) => state.post);

  const { data: userData } = useSWR('/api/user', fetcher);
  const { data: postsData } = useSWR('/api/posts?lastId=0', fetcher);
  const { data: followingsPostsData } = useSWR('/api/posts/followings/?lastId=0', fetcher);

  return (
    <AppLayout>
      <Col span={18}>
        <Row gutter={[8, 8]}>
          <Divider orientation="left">전체 작품</Divider>
          {postsData?.map((post) => (
            <Col span={4} key={post.id}>
              <PostCard key={post.id} post={post} />
            </Col>
          ))}
          {userData && <Divider orientation="left">팔로우하는 유저의 작품</Divider>}
          {userData &&
            followingsPostsData?.map((post) => (
              <Col span={4} key={post.id}>
                <PostCard key={post.id} post={post} />
              </Col>
            ))}
        </Row>
      </Col>
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
