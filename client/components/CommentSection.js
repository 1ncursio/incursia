import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { List, Modal } from 'antd';
import useSWR from 'swr';
import { REMOVE_COMMENT_REQUEST } from '../reducers/post';
import fetcher from '../util/fetcher';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentSection = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: postData } = useSWR(`/api/post/${id}`, fetcher);

  const dispatch = useDispatch();

  const [replyId, setReplyId] = useState(-1);

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
      <CommentForm placeholder="댓글 달기" type="comment" />
      {postData?.Comments && (
        <List
          header={`${postData.Comments.length}개의 댓글`}
          itemLayout="horizontal"
          dataSource={postData.Comments}
          renderItem={(item) => (
            <li>
              <CommentList item={item} toggleReplyForm={toggleReplyForm} onDeleteComment={onDeleteComment} replyId={replyId} />
            </li>
          )}
        />
      )}
    </>
  );
};

export default CommentSection;
