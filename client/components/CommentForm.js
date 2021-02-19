import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Comment, Form, Input, List, Avatar, Tooltip, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import moment from 'moment';
import useInput from './hooks/useInput';
import { ADD_COMMENT_REQUEST, REMOVE_COMMENT_REQUEST } from '../reducers/post';
import fetcher from '../util/fetcher';

moment.locale('ko');

const CommentForm = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: userData, mutate: userMutate } = useSWR('/api/user', fetcher);
  const { data: postData, mutate: postMutate } = useSWR(`/api/post/${id}`, fetcher);

  const dispatch = useDispatch();

  const { addCommentDone, addCommentLoading, addedCommentId, removeCommentDone, removedCommentId } = useSelector((state) => state.post);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');
  const [replyId, setReplyId] = useState(-1);

  useEffect(() => {
    if (addCommentDone) {
      postMutate(
        {
          ...postData,
          Comments: [
            ...postData.Comments,
            {
              id: addedCommentId,
              userId: userData.id,
              content: commentText,
              User: {
                id: userData.id,
                nickname: userData.nickname,
                profile: userData.profile,
              },
            },
          ],
        },
        false
      );
      setCommentText('');
    }
  }, [addCommentDone]);

  useEffect(() => {
    if (removeCommentDone) {
      postMutate(
        {
          ...postData,
          Comments: postData.Comments.filter((v) => v.id !== removedCommentId),
        },
        false
      );
    }
  }, [removeCommentDone]);

  const toggleReplyForm = useCallback(
    (id) => {
      console.log('toggleReplyForm called');
      if (id !== replyId) {
        setReplyId(id);
      } else {
        setReplyId(-1);
      }
    },
    [replyId]
  );

  const onSubmitComment = useCallback(() => {
    if (!commentText || !commentText.trim()) {
      return Modal.error({
        content: '내용을 작성해주세요.',
      });
    }
    if (userData) {
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: { content: commentText, postId: postData.id, userId: userData.id },
      });
    } else {
      Modal.error({
        content: '로그인한 사용자만 접근 가능합니다.',
        okText: '확인',
      });
    }
  }, [commentText, postData, userData, addedCommentId]);

  const onDeleteComment = useCallback((commentId) => {
    Modal.confirm({
      content: '정말로 이 댓글을 삭제하시겠어요?',
      okText: '삭제',
      cancelText: '취소',
      onOk: () => {
        dispatch({
          type: REMOVE_COMMENT_REQUEST,
          data: commentId,
        });
      },
    });
  });

  return (
    <>
      <Form onFinish={onSubmitComment} layout="inline">
        <Form.Item style={{ width: '90%', height: 60 }}>
          <Input.TextArea value={commentText} onChange={onChangeCommentText} placeholder="댓글 달기" style={{ resize: 'none' }} bordered />
        </Form.Item>
        <Form.Item style={{ width: '10%', height: 60 }}>
          <Button type="primary" htmlType="submit" loading={addCommentLoading} style={{ width: '100%', height: '100%' }}>
            작성
          </Button>
        </Form.Item>
      </Form>
      {postData?.Comments && (
        <List
          header={`${postData.Comments.length}개의 댓글`}
          itemLayout="horizontal"
          dataSource={postData.Comments}
          renderItem={(item) => (
            <li>
              <Comment
                actions={[
                  <span key="comment-nested-reply-to" onClick={() => toggleReplyForm(item.id)}>
                    답글
                  </span>,
                  <Tooltip title="삭제">{item.User.id === userData?.id && <DeleteOutlined onClick={() => onDeleteComment(item.id)} />}</Tooltip>,
                ]}
                author={
                  <Link href={`/user/${item.User.id}/illustration`}>
                    <a>{item.User.nickname}</a>
                  </Link>
                }
                avatar={
                  <Link href={`/user/${item.User.id}/illustration`}>
                    <a>
                      <Avatar src={item.User.profile && `http://localhost:3100/${item.User.profile}`}>
                        {!item.User.profile && item.User.nickname[0]}
                      </Avatar>
                    </a>
                  </Link>
                }
                datetime={
                  <Tooltip title={moment(item.createdAt).format('YYYY년 MM월 DD일 HH:mm')}>
                    <span>{moment(item.createdAt).fromNow()}</span>
                  </Tooltip>
                }
                content={<p>{item.content}</p>}
              >
                {replyId === item.id && <div>답글있음</div>}
              </Comment>
            </li>
          )}
        />
      )}
    </>
  );
};

export default CommentForm;
