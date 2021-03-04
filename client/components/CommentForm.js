import { SmileOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Popover } from 'antd';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { ADD_COMMENT_REQUEST, ADD_REPLY_REQUEST } from '../reducers/post';
import { fetcher } from '../util/fetcher';
import useInput from '../hooks/useInput.ts';
import PopoverEmoticon from './PopoverEmoticon';

const CommentForm = ({ placeholder, type, replyId, setReplyId, postData, postMutate }) => {
  const dispatch = useDispatch();

  const [visiblePopover, setVisiblePopover] = useState(false);

  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  const { addCommentDone, addCommentLoading, addedCommentId, removeCommentDone, removedCommentId } = useSelector((state) => state.post);

  const { data: userData } = useSWR('/api/user', fetcher);

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
                replyId: addedCommentId,
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
      } else if (type === 'reply') {
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

    if (!userData) {
      return Modal.error({
        content: '로그인한 사용자만 접근 가능합니다.',
        okText: '확인',
      });
    }

    if (type === 'comment') {
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: { content: commentText, postId: postData.id, userId: userData.id, replyId },
      });
    } else {
      dispatch({
        type: ADD_REPLY_REQUEST,
        data: { content: commentText, postId: postData.id, userId: userData.id, replyId },
      });
    }

    setReplyId(-1);
  }, [commentText, userData, addedCommentId, replyId, setReplyId]);

  return (
    <Form onFinish={onSubmitComment} layout="inline" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Form.Item>
        <Popover
          trigger="click"
          placement="bottomRight"
          title="이모티콘"
          visible={visiblePopover}
          content={<PopoverEmoticon setCommentText={setCommentText} setVisiblePopover={setVisiblePopover} />}
        >
          <SmileOutlined style={{ fontSize: 22, opacity: 0.7, marginRight: 8 }} onClick={() => setVisiblePopover((prev) => !prev)} />
        </Popover>
      </Form.Item>
      <Form.Item style={{ width: '88%', background: 'white' }}>
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
  setReplyId: PropTypes.func.isRequired,
  postData: PropTypes.object.isRequired,
  postMutate: PropTypes.func.isRequired,
};

export default CommentForm;
