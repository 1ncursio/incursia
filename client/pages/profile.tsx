import React, { useEffect } from 'react';
import { Row } from 'antd';
import Head from 'next/head';
import Router from 'next/router';
import useSWR from 'swr';

import AppLayout from '@components/AppLayout';
import ProfileForm from '@components/ProfileForm';
import { fetcher } from '@utils/fetcher';

const Profile = () => {
  const { data: userData } = useSWR('/api/user', fetcher);
  useEffect(() => {
    if (!userData) {
      Router.push('/');
    }
  }, [userData]);

  return (
    <>
      <Head>
        <title>내 프로필 | 유토피아</title>
      </Head>
      <AppLayout>
        <Row justify="center" gutter={16}>
          <ProfileForm />
        </Row>
      </AppLayout>
    </>
  );
};

export default Profile;