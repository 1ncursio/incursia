import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import useSWR from 'swr';

import AppLayout from '../components/AppLayout';
import ProfileForm from '../components/ProfileForm';
// import FollowList from '../components/FollowList';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import fetcher from '../util/fetcher';

const Profile = ({ user: initialUser }) => {
  // const [followersLimit, setFollowersLimit] = useState(3);
  // const [followingsLimit, setFollowingsLimit] = useState(3);

  const { data: userData, error: userError } = useSWR('/api/user', fetcher, { initialData: initialUser });
  // const { data: followersData, error: followerError } = useSWR(`http://localhost:3065/user/followers?limit=${followersLimit}`, fetcher);
  // const { data: followingsData, error: followingError } = useSWR(`http://localhost:3065/user/followings?limit=${followingsLimit}`, fetcher);

  useEffect(() => {
    if (!userData) {
      Router.push('/');
    }
  }, [userData]);

  // const loadMoreFollowings = useCallback(() => {
  //   setFollowingsLimit((prev) => prev + 3);
  // }, []);

  // const loadMoreFollowers = useCallback(() => {
  //   setFollowersLimit((prev) => prev + 3);
  // }, []);

  // if (followerError || followingError) {
  //   console.error(followerError || followingError);
  //   return <div>팔로잉/팔로워 로딩 중 에러가 발생했습니다.</div>;
  // }

  return (
    <>
      <Head>
        <title>내 프로필 | 유토피아</title>
      </Head>
      <AppLayout>
        <ProfileForm />
        {/* <FollowList header="팔로잉" data={followingsData} onClickMore={loadMoreFollowings} loading={!followingsData && !followingError} /> */}
        {/* <FollowList header="팔로워" data={followersData} onClickMore={loadMoreFollowers} loading={!followersData && !followerError} /> */}
      </AppLayout>
    </>
  );
};

export default Profile;
