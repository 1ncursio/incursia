import React, { useCallback, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Space, Tooltip, Typography } from 'antd';
import moment from 'moment';
import { AlertOutlined, DeleteOutlined, HeartFilled, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { fetcher } from '@utils/fetcher';

const { Title, Paragraph } = Typography;

const NoticeSection = () => {
  const router = useRouter();
  const { id } = router.query;

  const [liked, setLiked] = useState(false);

  const { data: userData } = useSWR('/api/user', fetcher);
  const { data: noticeData } = useSWR(id ? `/api/post/notice/${id}` : null, fetcher);

  const onLike = useCallback(() => {
    if (!userData) {
      return alert('로그인이 필요합니다.');
    }
    // dispatch({ type: LIKE_POST_REQUEST, data: noticeData.id });
    return setLiked((prev) => !prev);
  }, [userData, noticeData?.id]);

  const onDislike = useCallback(() => {
    if (!userData) {
      return alert('로그인이 필요합니다.');
    }
    // dispatch({ type: DISLIKE_POST_REQUEST, data: noticeData.id });
    return setLiked((prev) => !prev);
  }, [userData, noticeData?.id]);

  const onClickDelete = useCallback(() => {}, []);

  return (
    <>
      <Title level={3}>{noticeData?.title}</Title>
      <Paragraph>{noticeData?.caption}</Paragraph>
      <Tooltip title={moment(noticeData?.createdAt).format('YYYY년 MM월 DD일 HH:mm')}>
        <span>{moment(noticeData?.createdAt).fromNow()}</span>
      </Tooltip>
      <Space style={{ float: 'right' }}>
        <Tooltip title="좋아요!">
          {liked ? (
            <HeartFilled style={{ fontSize: 24, opacity: 0.9 }} onClick={onDislike} />
          ) : (
            <HeartOutlined style={{ fontSize: 24, opacity: 0.9 }} onClick={onLike} />
          )}
        </Tooltip>
        <Tooltip title="공유하기!">
          <ShareAltOutlined style={{ fontSize: 24, opacity: 0.9 }} />
        </Tooltip>
        <Tooltip title="신고하기">
          <AlertOutlined style={{ fontSize: 24, opacity: 0.9 }} />
        </Tooltip>

        {userData?.id === noticeData?.User.id && (
          <Tooltip title="삭제하기">
            <DeleteOutlined style={{ fontSize: 24 }} onClick={onClickDelete} />
          </Tooltip>
        )}
      </Space>
    </>
  );
};

export default NoticeSection;
