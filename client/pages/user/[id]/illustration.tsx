import React from 'react';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';
import AppLayout from '@components/AppLayout';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import PostCard from '@components/PostCard';
import UserPageMenu from '@components/UserPageMenu';
import UserPageProfile from '@components/UserPageProfile';
import { IUser } from '@typings/IUser';
import { IPost } from '@typings/IPost';
import ExpiredValidation from '@components/ExpiredValidation';
import { MenuHeaderWrapper, MenuHeader } from '@pages/user/[id]/style';
import wrapper from '../../../store/configureStore';

interface Props {
  user: IUser;
  posts: IPost[];
}

const UserIllustration = ({ user: initialUser, posts: initialPosts }: Props) => {
  const router = useRouter();

  const { id } = router.query;

  const { data: userData } = useSWR(`/api/user/${id}?lastId=0`, fetcher, { initialData: initialUser });

  const { data: postsData } = useSWR(`/api/user/${id}/posts`, fetcher, { initialData: initialPosts });

  if (userData?.status === 'pending') {
    return <ExpiredValidation />;
  }

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
            {postsData?.map((post: IPost) => (
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

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const user = await fetcher(`/api/user/${context.params?.id}?lastId=0`);
  const posts = await fetcher(`/api/user/${context.params?.id}/posts`);
  return { props: { user, posts } };
});

export default UserIllustration;
