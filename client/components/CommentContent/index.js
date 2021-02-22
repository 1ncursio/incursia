import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import fetcher from '../../util/fetcher';

const CommentContent = ({ content }) => {
  const emoticons = content.match(/:[^:\s]*(?:::[^:\s]*)*:/);

  const emoticon = emoticons ? emoticons[0].slice(1, emoticons[0].length - 1) : null;

  const { data: emoticonData } = useSWR(emoticon ? `/api/emoticon/${emoticon}` : null, fetcher);

  useEffect(() => {
    if (emoticonData) console.log(emoticonData);
  }, [emoticonData]);

  if (emoticonData) {
    return <img alt={emoticonData.emoticon.name} src={`http://localhost:3100/${emoticonData.emoticon.src}`} width="100" height="100" />;
  }

  return <p>{content}</p>;
};

CommentContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default CommentContent;
