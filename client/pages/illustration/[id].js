import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import wrapper from '../../store/configureStore';
import AppLayout from '../../components/AppLayout';
import IllustCard from '../../components/IllustCard';
import fetcher from '../../util/fetcher';
import UserProfile from '../../components/UserProfile';
import CommentSection from '../../components/CommentSection';

const Illustration = ({ post: initialPost }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data: postData, mutate: postMutate } = useSWR(`/api/post/${id}`, fetcher, { initialData: initialPost });
  const { data: userData } = useSWR('/api/user', fetcher);

  const { removePostDone, likePostDone, dislikePostDone } = useSelector((state) => state.post);

  useEffect(() => {
    if (removePostDone) {
      Router.replace('/');
    }
  }, [removePostDone]);

  useEffect(() => {
    if (likePostDone) {
      postMutate(
        {
          ...postData,
          Likers: [
            ...postData.Likers,
            {
              id: userData.id,
            },
          ],
        },
        false
      );
    }
  }, [likePostDone]);

  useEffect(() => {
    if (dislikePostDone) {
      postMutate(
        {
          ...postData,
          Likers: postData.Likers.filter((v) => v.id !== userData.id),
        },
        false
      );
    }
  }, [dislikePostDone]);

  return (
    <AppLayout>
      <Head>
        <title>{postData.User.nickname}님의 일러스트 - 유토피아</title>
        <meta name="description" content={postData.caption} />
        <meta name="og:title" content={`${postData.User.nickname}님의 일러스트`} />
        <meta name="og:description" content={postData.caption} />
        <meta name="og:image" content={postData.Images[0] ? postData.Images[0].src : 'https://nodebird.com/favicon.ico'} />
        <meta name="og:url" content={`https://nodebird.com/post/${id}`} />
      </Head>
      <Row justify="center" gutter={16}>
        <Col span={12}>
          <IllustCard postData={postData} />
          <CommentSection />
        </Col>
        <Col span={4}>
          <UserProfile postData={postData} />
        </Col>
      </Row>
    </AppLayout>
  );
};

Illustration.propTypes = {
  post: PropTypes.object.isRequired,
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const post = await fetcher(`/api/post/${context.params.id}`);
  return { props: { post } };
});

export default Illustration;
