import React, { useEffect } from 'react';
import { Row } from 'antd';
import Head from 'next/head';
import Router from 'next/router';
import useSWR from 'swr';

import AppLayout from '@components/AppLayout';
import ProfileForm from '@components/ProfileForm';
import { fetcher } from '@utils/fetcher';
import ExpiredValidation from '@components/ExpiredValidation';

const Profile = () => {
  const { data: userData } = useSWR('/api/user', fetcher);
  useEffect(() => {
    if (!userData) {
      Router.push('/');
    }
  }, [userData]);

  if (userData?.status === 'pending') {
    return <ExpiredValidation />;
  }

  return (
    <>
      <Head>
        <title>내 프로필 | Incursia</title>
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
