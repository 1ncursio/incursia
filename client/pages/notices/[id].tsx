import { Col, Row } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import AppLayout from '@components/AppLayout';
import CommentSection from '@components/CommentSection';
import NoticeSection from '@components/NoticeSection';
import { fetcher } from '@utils/fetcher';

const NoticePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: noticeData, mutate: noticeMutate } = useSWR(id ? `/api/post/notice/${id}` : null, fetcher);

  useEffect(() => {
    if (noticeData) console.log(noticeData);
  }, [noticeData]);

  return (
    <AppLayout>
      <Head>
        {/* <title>{postData.User.nickname}님의 일러스트 - 유토피아</title>
    <meta name="description" content={postData.caption} />
    <meta name="og:title" content={`${postData.User.nickname}님의 일러스트`} />
    <meta name="og:description" content={postData.caption} />
    <meta name="og:image" content={postData.Images[0] ? postData.Images[0].src : 'https://nodebird.com/favicon.ico'} />
    <meta name="og:url" content={`https://nodebird.com/post/${id}`} /> */}
      </Head>
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
