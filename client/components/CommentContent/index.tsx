import React from 'react';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';

interface Props {
  content: string;
}

const CommentContent = ({ content }: Props) => {
  const emoticons = content.match(/:[^:\s]*(?:::[^:\s]*)*:/);

  const emoticon = emoticons ? emoticons[0].slice(1, emoticons[0].length - 1) : null;

  const { data: emoticonData } = useSWR(emoticon ? `/api/emoticon/${emoticon}` : null, fetcher);

  if (emoticonData) {
    return <img alt={emoticonData.name} src={`http://localhost:3100/${emoticonData.src}`} width="100" height="auto" />;
  }

  return <p>{content}</p>;
};

export default CommentContent;
