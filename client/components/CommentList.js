import { Comment, Tooltip, Avatar, List } from 'antd';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DeleteOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import fetcher from '../util/fetcher';
import CommentForm from './CommentForm';

moment.locale('ko');

const CommentWrapper = styled(Comment)`
  ${({ nested }) =>
    nested &&
    css`
      padding-left: 40px;
    `}
`;

const CommentList = ({ item, toggleReplyForm, onDeleteComment, replyId }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data: userData } = useSWR('/api/user', fetcher);
  const { data: postData } = useSWR(`/api/post/${id}`, fetcher);

  return (
    <>
      <CommentWrapper
        nested={item.id !== item.replyId}
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
              <Avatar src={item.User.profile && `http://localhost:3100/${item.User.profile}`}>{!item.User.profile && item.User.nickname[0]}</Avatar>
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
        {replyId === item.id && <CommentForm placeholder="답글 달기" replyId={replyId} type="reply" />}
      </CommentWrapper>
    </>
  );
};

CommentList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    createdAt: PropTypes.string,
    content: PropTypes.string,
    replyId: PropTypes.number,
  }).isRequired,
  toggleReplyForm: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  replyId: PropTypes.number.isRequired,
};

export default CommentList;
