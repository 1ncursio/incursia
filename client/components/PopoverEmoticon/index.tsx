import { Col, Row } from 'antd';
import React, { useCallback, Dispatch, SetStateAction } from 'react';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import { IEmoticon } from '@typings/IEmoticon';

interface Props {
  setCommentText: Dispatch<SetStateAction<string>>;
  setVisiblePopover: Dispatch<SetStateAction<boolean>>;
}

const PopoverEmoticon = ({ setCommentText, setVisiblePopover }: Props) => {
  const { data: emoticonData } = useSWR<IEmoticon[]>('/api/emoticon', fetcher);

  const onClickEmoticon = useCallback(
    (emoticon) => {
      setCommentText(`:${emoticon.name}:`);
      setVisiblePopover(false);
    },
    [emoticonData],
  );

  return (
    <Row gutter={[16, 16]} style={{ width: 500 }}>
      {emoticonData?.map((emoticon) => (
        <Col span={6}>
          <a onClick={() => onClickEmoticon(emoticon)}>
            <img alt={emoticon.name} src={emoticon.src} style={{ width: '100%' }} />
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default PopoverEmoticon;
