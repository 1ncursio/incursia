import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';
import { fetcher } from '../util/fetcher';

const FollowButton = ({ postData }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isFollowing, setIsFollowing] = useState(false);

  const { data: userData, mutate: userMutate } = useSWR('/api/user', fetcher);

  const { followLoading, unfollowLoading, followDone, unfollowDone } = useSelector((state) => state.user);

  useEffect(() => {
    if (userData) {
      setIsFollowing(userData.Followings.find((v) => v.id === postData.User.id));
      console.log('isFollowing', isFollowing);
    }
  }, [userData]);

  useEffect(() => {
    if (followDone) {
      userMutate({
        ...userData,
        Followings: [
          ...userData.Followings,
          {
            id: postData.User.id,
          },
        ],
      });
    }
  }, [followDone]);

  useEffect(() => {
    if (unfollowDone) {
      userMutate({
        ...userData,
        Followings: userData.Followings.filter((v) => v.id !== postData.User.id),
      });
    }
  }, [unfollowDone]);

  const onClickButton = useCallback(() => {
    if (!isFollowing) {
      if (userData) {
        dispatch({
          type: FOLLOW_REQUEST,
          data: postData.User.id,
        });
      } else {
        router.push('/login');
      }
    } else {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: postData.User.id,
      });
    }
  }, [isFollowing]);

  if (postData.User.id === userData?.id) {
    return null;
  }
  return (
    <Button loading={followLoading || unfollowLoading} onClick={onClickButton} type={isFollowing ? 'default' : 'primary'} shape="round" block>
      {isFollowing ? '팔로우 중' : '팔로우 하기'}
    </Button>
  );
};

FollowButton.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default FollowButton;
