import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Typography, Tooltip } from 'antd';
import Link from 'next/link';
import { IPost } from '@typings/IPost';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const { Title } = Typography;

interface Props {
  notice: IPost;
}

const NoticeCard = ({ notice }: Props) => {
  return (
    <>
      <Link href={`/notices/${notice.id}`}>
        <a>
          <Title level={4}>{notice.title}</Title>
        </a>
      </Link>
      <Tooltip title={dayjs(notice.createdAt).format('YYYY년 MM월 DD일 HH:mm')}>
        <span>{dayjs(notice.createdAt).fromNow()}</span>
      </Tooltip>
    </>
  );
};

export default NoticeCard;
