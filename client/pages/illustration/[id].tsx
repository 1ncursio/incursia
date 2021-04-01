import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';
import { Col, Row } from 'antd';
// @ts-ignore
import { useSelector } from 'react-redux';
import AppLayout from '@components/AppLayout';
import IllustCard from '@components/IllustCard';
import { fetcher } from '@utils/fetcher';
import produce from 'immer';
import UserProfile from '@components/UserProfile';
import CommentSection from '@components/CommentSection';
import { IPost } from '@typings/IPost';
import { IUser } from '@typings/IUser';
import ExpiredValidation from '@components/ExpiredValidation';
import wrapper from '../../store/configureStore';

interface Props {
  post: IPost;
}

const Illustration = ({ post: initialPost }: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const { data: postData, mutate: postMutate } = useSWR<IPost>(`/api/post/${id}`, fetcher, {
    initialData: initialPost,
  });
  const { data: userData } = useSWR<IUser>('/api/user', fetcher);

  const { removePostDone, likePostDone, dislikePostDone } = useSelector((state: any) => state.post);

  useEffect(() => {
    if (removePostDone) {
      Router.replace('/');
    }
  }, [removePostDone]);

  useEffect(() => {
    if (likePostDone) {
      // postMutate(
      //   {
      //     ...postData,
      //     Likers: [
      //       ...postData.Likers,
      //       {
      //         id: userData?.id,
      //       },
      //     ],
      //   },
      //   false,
      // );
      postMutate(
        produce((draft) => {
          draft.Likers.push({ id: userData?.id });
        }),
        false,
      );
    }
  }, [likePostDone]);

  useEffect(() => {
    if (dislikePostDone) {
      // postMutate(
      //   {
      //     ...postData,
      //     Likers: postData.Likers.filter((v: IUser) => v.id !== userData?.id),
      //   },
      //   false,
      // );
      postMutate(
        produce((draft) => {
          draft.Likers.filter((v: IUser) => v.id !== userData?.id);
        }),
      );
    }
  }, [dislikePostDone]);

  if (userData?.status === 'pending') {
    return <ExpiredValidation />;
  }

  return (
    <AppLayout>
      {postData && (
        <Head>
          <title>{postData.User.nickname}님의 일러스트 - 유토피아</title>
          <meta name="description" content={postData.caption} />
          <meta name="og:title" content={`${postData.User.nickname}님의 일러스트`} />
          <meta name="og:description" content={postData.caption} />
          <meta
            name="og:image"
            content={postData.Images[0] ? postData.Images[0].src : 'https://nodebird.com/favicon.ico'}
          />
          <meta name="og:url" content={`https://nodebird.com/post/${id}`} />
        </Head>
      )}
      {postData && (
        <Row justify="center" gutter={16}>
          <Col span={12}>
            <IllustCard postData={postData} />
            <CommentSection postData={postData} postMutate={postMutate} />
          </Col>
          <Col span={4}>
            <UserProfile postData={postData} />
          </Col>
        </Row>
      )}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  // const cookie = context.req ? context.req.headers.cookie : '';
  // axios.defaults.headers.Cookie = '';
  // if (context.req && cookie) {
  //   axios.defaults.headers.Cookie = cookie;
  // }

  const post = await fetcher(`/api/post/${context.params?.id}`);
  // const parsedCookie = post.headers['set-cookie'] ? parseCookies(post.headers['set-cookie'][0]) : '';
  // const { data } = post;
  // return { props: { post: data, cookie: parsedCookie && parsedCookie } };
  return { props: { post } };
});

export default Illustration;
