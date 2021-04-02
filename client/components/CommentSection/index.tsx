import { Avatar, List, Modal, Tooltip } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { useCallback, useState } from 'react';
// @ts-ignore
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { DeleteOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import CommentContent from '@components/CommentContent';
import { IPost } from '@typings/IPost';
import CommentForm from '@components/CommentForm';
import CommentWrapper from '@components/CommentSection/styles';
import { backUrl } from '@config/config';
import { REMOVE_COMMENT_REQUEST } from '../../reducers/post';

dayjs.locale('ko');
dayjs.extend(relativeTime);

interface Props {
  postData: IPost;
  postMutate: any;
}

const CommentSection = ({ postData, postMutate }: Props) => {
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
    [replyId],
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
  }, []);

  return (
    <>
      <CommentForm
        placeholder="댓글 달기"
        type="comment"
        setReplyId={setReplyId}
        postData={postData}
        postMutate={postMutate}
      />
      {postData?.Comments && (
        <List
          header={`${postData.Comments.length}개의 댓글`}
          itemLayout="horizontal"
          dataSource={postData.Comments}
          renderItem={(item) => (
            <li>
              <CommentWrapper
                nested={item.id !== item.replyId}
                actions={[
                  <span onClick={() => toggleReplyForm(item.id)}>답글</span>,
                  <Tooltip title="삭제">
                    {item.User.id === userData?.id && <DeleteOutlined onClick={() => onDeleteComment(item.id)} />}
                  </Tooltip>,
                ]}
                author={
                  <Link href={`/user/${item.User.id}/illustration`}>
                    <a>{item.User.nickname}</a>
                  </Link>
                }
                avatar={
                  <Link href={`/user/${item.User.id}/illustration`}>
                    <a>
                      <Avatar src={item.User.profile && `${backUrl}/${item.User.profile}`}>
                        {!item.User.profile && item.User.nickname[0]}
                      </Avatar>
                    </a>
                  </Link>
                }
                datetime={
                  <Tooltip title={dayjs(item.createdAt).format('YYYY년 MM월 DD일 HH:mm')}>
                    <span>{dayjs(item.createdAt).fromNow()}</span>
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

export default CommentSection;
