import { SmileOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Popover } from 'antd';
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import PopoverEmoticon from '@components/PopoverEmoticon';
import useInput from '@hooks/useInput';
import { IPost } from '@typings/IPost';
import { ADD_COMMENT_REQUEST, ADD_REPLY_REQUEST } from '../../reducers/post';

interface Props {
  placeholder?: string;
  replyId?: number;
  type: string;
  setReplyId: Dispatch<SetStateAction<number>>;
  postData: IPost;
  postMutate: any;
}

const CommentForm = ({ placeholder = '', replyId = -1, type, setReplyId, postData, postMutate }: Props) => {
  const dispatch = useDispatch();

  const [visiblePopover, setVisiblePopover] = useState(false);

  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  const { addCommentDone, addCommentLoading, addedCommentId, removeCommentDone, removedCommentId } = useSelector(
    (state: any) => state.post,
  );

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
          false,
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
        false,
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

    return setReplyId(-1);
  }, [commentText, userData, addedCommentId, replyId, setReplyId]);

  return (
    <Form
      onFinish={onSubmitComment}
      layout="inline"
      style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
    >
      <Form.Item>
        <Popover
          trigger="click"
          placement="bottomRight"
          title="이모티콘"
          visible={visiblePopover}
          content={<PopoverEmoticon setCommentText={setCommentText} setVisiblePopover={setVisiblePopover} />}
        >
          <SmileOutlined
            style={{ fontSize: 22, opacity: 0.7, marginRight: 8 }}
            onClick={() => setVisiblePopover((prev) => !prev)}
          />
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
        <Button
          type="primary"
          htmlType="submit"
          loading={addCommentLoading}
          style={{ float: 'right', height: 55 }}
          block
        >
          작성
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
