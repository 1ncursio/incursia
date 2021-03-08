import React, { useEffect } from 'react';
import { Col, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import styled from 'styled-components';
import AppLayout from '../../../components/AppLayout';
import { fetcher } from '@utils/fetcher';
import wrapper from '../../../store/configureStore';
import PostCard from '../../../components/PostCard';
import UserPageMenu from '../../../components/UserPageMenu';
import UserPageProfile from '../../../components/UserPageProfile';
import { MenuHeaderWrapper, MenuHeader } from './style';

const UserIllustration = ({ user: initialUser, posts: initialPosts }) => {
  const router = useRouter();

  const { id } = router.query;

  const { data: userData } = useSWR(`/api/user/${id}?lastId=0`, fetcher, { initialData: initialUser });

  const { data: postsData } = useSWR(`/api/user/${id}/posts`, fetcher, { initialData: initialPosts });

  // useEffect(() => {
  // console.log(userData);
  // }, []);

  return (
    <AppLayout>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          <UserPageProfile userData={userData} />
          <UserPageMenu current="illustration" userId={parseInt(id, 10)} />
          <MenuHeaderWrapper>
            <MenuHeader>{`${postsData.length}개의 일러스트`}</MenuHeader>
          </MenuHeaderWrapper>
          <Row gutter={[8, 8]}>
            {postsData?.map((post) => (
              <Col xs={24} md={4} key={post.id}>
                <PostCard key={post.id} post={post} avatarVisible={false} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </AppLayout>
  );
};

UserIllustration.propTypes = {
  user: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const user = await fetcher(`/api/user/${context.params.id}?lastId=0`);
  const posts = await fetcher(`/api/user/${context.params.id}/posts`);
  return { props: { user, posts } };
});

export default UserIllustration;
