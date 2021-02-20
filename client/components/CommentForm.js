import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import fetcher from '../util/fetcher';
import useInput from './hooks/useInput';
import { ADD_COMMENT_REQUEST, ADD_REPLY_REQUEST } from '../reducers/post';

const CommentForm = ({ placeholder, type, replyId }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  const { addCommentDone, addCommentLoading, addedCommentId, removeCommentDone, removedCommentId } = useSelector((state) => state.post);

  const { data: userData } = useSWR('/api/user', fetcher);
  const { data: postData, mutate: postMutate } = useSWR(`/api/post/${id}`, fetcher);

  useEffect(() => {
    if (addCommentDone) {
      if (type === 'comment') {
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
      } else {
        postMutate();
      }
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

  const onSubmitComment = useCallback(() => {
    if (!commentText || !commentText.trim()) {
      return Modal.error({
        content: '내용을 작성해주세요.',
      });
    }
    if (userData) {
      if (type === 'comment') {
        dispatch({
          type: ADD_COMMENT_REQUEST,
          data: { content: commentText, postId: postData.id, userId: userData.id },
        });
      } else {
        dispatch({
          type: ADD_REPLY_REQUEST,
          data: { content: commentText, postId: postData.id, userId: userData.id, replyId },
        });
      }
    } else {
      Modal.error({
        content: '로그인한 사용자만 접근 가능합니다.',
        okText: '확인',
      });
    }
  }, [commentText, postData, userData, addedCommentId]);

  return (
    <Form onFinish={onSubmitComment} layout="inline" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Form.Item style={{ width: '90%', background: 'white' }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          placeholder={placeholder}
          style={{ resize: 'none', width: '100%', height: 55 }}
          bordered
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={addCommentLoading} style={{ float: 'right', height: 55 }} block>
          작성
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.defaultProps = {
  placeholder: '',
  replyId: -1,
};

CommentForm.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  replyId: PropTypes.number,
};

export default CommentForm;
