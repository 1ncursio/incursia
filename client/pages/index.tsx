import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import useSWR, { useSWRInfinite } from 'swr';
import { IPost } from '@typings/IPost';
import { IUser } from '@typings/IUser';
import AppLayout from '@components/AppLayout';
import PostCard from '@components/PostCard';
import { fetcher } from '@utils/fetcher';
import ExpiredValidation from '@components/ExpiredValidation';
import PageNav from '@components/PageNav';

const Home = () => {
  const { data: userData } = useSWR<IUser>('/api/user', fetcher);
  const { data: postsData, setSize } = useSWRInfinite<IPost[]>(
    (index: number) => `/api/posts?perPage=12&page=${index + 1}`,
    fetcher,
  );
  const { data: followingsPostsData } = useSWR<IPost[]>(userData ? '/api/posts/followings/?lastId=0' : null, fetcher);
  const isEmpty = postsData?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (postsData && postsData[postsData.length - 1]?.length < 12);

  useEffect(() => {
    if (postsData) console.log(postsData);
  }, [postsData]);

  useEffect(() => {
    function onScroll() {
      // window.scrollY : 얼마나 내렸는지
      // document.documentElement.clientHeight : 화면에 보이는 길이
      // document.documentElement.scrollHeight : 총길이

      if (
        window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300 &&
        !isReachingEnd
      ) {
        // const lastId = mainPosts[mainPosts.length - 1]?.id;
        // dispatch(
        // loadPosts({
        // lastId,
        // }),
        // );
        setSize((prevSize) => prevSize + 1).then(() => {
          // 스크롤 위치 유지
        });
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isReachingEnd]);

  if (userData?.status === 'pending') {
    return <ExpiredValidation />;
  }

  return (
    <AppLayout>
      <PageNav currentPage="Home" />
      <Row justify="center" gutter={16}>
        <Col md={18} sm={24} xs={24}>
          <Row gutter={[8, 8]}>
            {postsData?.flat()?.map((post) => (
              <Col md={6} key={post.id}>
                <PostCard key={post.id} post={post} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      {/* <DividerHeader>
        {userData && (
          <Row justify="center" gutter={16}>
            <Col span={18}>
              <h1>팔로우하는 유저의 작품</h1>
            </Col>
          </Row>
        )}
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
      </Row> */}
    </AppLayout>
  );
};

export default Home;
