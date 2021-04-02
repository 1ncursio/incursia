import { Col, Row } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import AppLayout from '@components/AppLayout';
import CommentSection from '@components/CommentSection';
import NoticeSection from '@components/NoticeSection';
import { fetcher } from '@utils/fetcher';
import { IUser } from '@typings/IUser';
import ExpiredValidation from '@components/ExpiredValidation';

const NoticePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: userData } = useSWR<IUser>('/api/user', fetcher);
  const { data: noticeData, mutate: noticeMutate } = useSWR(id ? `/api/post/notice/${id}` : null, fetcher);

  useEffect(() => {
    if (noticeData) console.log(noticeData);
  }, [noticeData]);

  if (userData?.status === 'pending') {
    return <ExpiredValidation />;
  }

  return (
    <AppLayout>
      {noticeData && (
        <Head>
          <title>{noticeData.User.nickname}님의 일러스트 - 유토피아</title>
          <meta name="description" content={noticeData.caption} />
          <meta name="og:title" content={`${noticeData.User.nickname}님의 일러스트`} />
          <meta name="og:description" content={noticeData.caption} />
          <meta
            name="og:image"
            content={noticeData.Images[0] ? noticeData.Images[0].src : 'http://incursia.site/favicon.ico'}
          />
          <meta name="og:url" content={`http://incursia.net/notices/${id}`} />
        </Head>
      )}
      <Row justify="center" gutter={16}>
        <Col span={12}>
          <NoticeSection />
          {noticeData && <CommentSection postData={noticeData} postMutate={noticeMutate} />}
        </Col>
        <Col span={4}>{/* <UserProfile postData={postData} /> */}</Col>
      </Row>
    </AppLayout>
  );
};

export default NoticePage;
