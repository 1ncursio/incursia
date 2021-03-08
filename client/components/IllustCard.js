import React, { useCallback, useEffect, useState } from 'react';
import { Image, Typography, Tag, Modal, Tooltip, Space } from 'antd';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { HeartOutlined, ShareAltOutlined, DeleteOutlined, AlertOutlined, HeartFilled, EyeFilled } from '@ant-design/icons';
import moment from 'moment';
import useSWR from 'swr';
import { LIKE_POST_REQUEST, REMOVE_POST_REQUEST, DISLIKE_POST_REQUEST } from '../reducers/post';
import { fetcher } from '@utils/fetcher';
import styled from 'styled-components';

moment.locale('ko');

const { Title, Paragraph, Text } = Typography;

const PostContent = styled.div`
  margin: 32px 0 48px 0;
`;

const IllustCard = ({ postData }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const { data: userData, error: userError } = useSWR('/api/user', fetcher);

  const { removePostDone } = useSelector((state) => state.post);

  useEffect(() => {
    if (userData) setLiked(postData.Likers.find((v) => v.id === userData?.id));
  }, [userData]);

  const onLike = useCallback(() => {
    if (!userData) {
      return alert('로그인이 필요합니다.');
    }
    dispatch({ type: LIKE_POST_REQUEST, data: postData.id });
    setLiked((prev) => !prev);
  }, [userData, postData?.id]);

  const onDislike = useCallback(() => {
    if (!userData) {
      return alert('로그인이 필요합니다.');
    }
    dispatch({ type: DISLIKE_POST_REQUEST, data: postData.id });
    setLiked((prev) => !prev);
  }, [userData, postData?.id]);

  const onClickDelete = useCallback(() => {
    // 로그인 안 한 경우
    if (!userData) {
      return Modal.error({
        content: '로그인이 필요합니다.',
        okText: '확인',
      });
    }

    Modal.confirm({
      title: '글 삭제',
      content: '정말로 이 글을 삭제하시겠어요?',
      okText: '삭제',
      cancelText: '취소',
      onOk: () => {
        dispatch({
          type: REMOVE_POST_REQUEST,
          data: postData.id,
        });
      },
    });
  }, [userData, postData?.id]);

  return (
    <>
      <Image.PreviewGroup>
        {postData?.Images.map((v) => (
          <Image width="100%" key={v.src} src={`http://localhost:3100/${v.src}`} />
        ))}
      </Image.PreviewGroup>
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

        {userData?.id === postData?.User.id ? (
          <Tooltip title="삭제하기">
            <DeleteOutlined style={{ fontSize: 24 }} onClick={onClickDelete} />
          </Tooltip>
        ) : null}
      </Space>
      <PostContent>
        <Title level={3}>{postData?.title}</Title>
        <Paragraph>{postData?.caption}</Paragraph>
        <div>
          {postData?.Tags.map((tag) => (
            <Link href={`/tag/${encodeURIComponent(tag.name)}`} key={tag.name}>
              <a>
                <Tag color="blue">{tag.name}</Tag>
              </a>
            </Link>
          ))}
        </div>
        <Space size="middle" style={{ margin: '16px 0' }}>
          <span>
            <HeartFilled style={{ opacity: 0.45, padding: 4 }} />
            <Text type="secondary" style={{ fontSize: '0.8rem' }}>
              {postData?.Likers.length}
            </Text>
          </span>
          <span>
            <EyeFilled style={{ opacity: 0.45, padding: 4 }} />
            <Text type="secondary" style={{ fontSize: '0.8rem' }}>
              {postData?.views}
            </Text>
          </span>
        </Space>
        <div>
          <Text type="secondary">{moment(postData?.createdAt).format('YYYY년 MM월 DD일 HH:mm')}</Text>
        </div>
      </PostContent>
    </>
  );
};

export default IllustCard;
