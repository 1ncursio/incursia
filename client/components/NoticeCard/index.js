import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Typography, Tooltip } from 'antd';

moment.locale('ko');

const { Title } = Typography;

const NoticeCard = ({ notice }) => {
  return (
    <>
      <Title level={4}>{notice.title}</Title>
      <Tooltip title={moment(notice.createdAt).format('YYYY년 MM월 DD일 HH:mm')}>
        <span>{moment(notice.createdAt).fromNow()}</span>
      </Tooltip>
    </>
  );
};

NoticeCard.propTypes = {
  notice: PropTypes.object.isRequired,
};

export default NoticeCard;
