import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../util/fetcher';

const PopoverEmoticon = ({ setCommentText, setVisiblePopover }) => {
  const { data: emoticonData } = useSWR('/api/emoticon', fetcher);

  const onClickEmoticon = useCallback(
    (emoticon) => {
      setCommentText(`:${emoticon.name}:`);
      setVisiblePopover(false);
    },
    [emoticonData]
  );

  return (
    <Row gutter={['16', '16']} style={{ width: 500 }}>
      {emoticonData?.map((emoticon) => (
        <Col span={6}>
          <a onClick={() => onClickEmoticon(emoticon)}>
            <img alt={emoticon.name} src={`http://localhost:3100/${emoticon.src}`} style={{ width: '100%' }} />
          </a>
        </Col>
      ))}
    </Row>
  );
};

PopoverEmoticon.propTypes = {
  setCommentText: PropTypes.func.isRequired,
  setVisiblePopover: PropTypes.func.isRequired,
};

export default PopoverEmoticon;
