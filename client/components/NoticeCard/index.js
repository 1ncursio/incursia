import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Typography, Tooltip } from 'antd';
import Link from 'next/link';

moment.locale('ko');

const { Title } = Typography;

const NoticeCard = ({ notice }) => {
  return (
    <>
      <Link href={`/notices/${notice.id}`}>
        <a>
          <Title level={4}>{notice.title}</Title>
        </a>
      </Link>
      <Tooltip title={moment(notice.createdAt).format('YYYY년 MM월 DD일 HH:mm')}>
        <span>{moment(notice.createdAt).fromNow()}</span>
      </Tooltip>
    </>
  );
};

NoticeCard.propTypes = {
  notice: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default NoticeCard;
