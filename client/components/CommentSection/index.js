import { Avatar, List, Modal, Tooltip } from 'antd';
import moment from 'moment';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { DeleteOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import { REMOVE_COMMENT_REQUEST } from '../../reducers/post';
import CommentForm from '../CommentForm';
import { fetcher } from '@utils/fetcher';
import CommentWrapper from './styles';
import CommentContent from '../CommentContent';

moment.locale('ko');

const CommentSection = ({ postData, postMutate }) => {
  const dispatch = useDispatch();

  const [replyId, setReplyId] = useState(-1);

  const { data: userData } = useSWR('/api/user', fetcher);

  const toggleReplyForm = useCallback(
    (id) => {
      console.log('toggleReplyForm called');
      if (id !== replyId) {
        setReplyId(id);
        console.log(`${id} !== ${replyId}`);
      } else {
        setReplyId(-1);
        console.log(`${id} === ${replyId}`);
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
      <CommentForm placeholder="댓글 달기" type="comment" setReplyId={setReplyId} postData={postData} postMutate={postMutate} />
      {postData?.Comments && (
        <List
          header={`${postData.Comments.length}개의 댓글`}
          itemLayout="horizontal"
          dataSource={postData.Comments}
          renderItem={(item) => (
            <li>
              <CommentWrapper
                nested={+(item.id !== item.replyId)}
                actions={[
                  <span onClick={() => toggleReplyForm(item.id)}>답글</span>,
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
                content={<CommentContent content={item.content} />}
              >
                {replyId === item.id && (
                  <CommentForm
                    placeholder="답글 달기"
                    type="reply"
                    setReplyId={setReplyId}
                    replyId={replyId}
                    postData={postData}
                    postMutate={postMutate}
                  />
                )}
              </CommentWrapper>
            </li>
          )}
        />
      )}
    </>
  );
};

CommentSection.propTypes = {
  postData: PropTypes.object.isRequired,
  postMutate: PropTypes.func.isRequired,
};

export default CommentSection;
