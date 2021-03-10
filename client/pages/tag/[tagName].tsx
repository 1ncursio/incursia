import React from 'react';
// @ts-ignore
import { useSelector } from 'react-redux';
import { Row, Col, Divider } from 'antd';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import AppLayout from '@components/AppLayout';
import PostCard from '@components/PostCard';
import { fetcher } from '@utils/fetcher';
import { IPost } from '@typings/IPost';
import wrapper from '../../store/configureStore';
import { ParsedUrlQuery } from 'node:querystring';

interface Props {
  posts: IPost[];
}

const TagPage = ({ posts: initialPosts }: Props) => {
  const router = useRouter();
  const { tagName }: ParsedUrlQuery = router.query;

  const { hasMorePosts } = useSelector((state: any) => state.post);

  const { data: postsData } = useSWR(`/api/posts/tag/${encodeURIComponent(tagName)}?lastId=0`, fetcher, {
    initialData: initialPosts,
  });

  return (
    <AppLayout>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          <Row gutter={[8, 8]}>
            <Divider orientation="left">{`${tagName} - 태그 검색 결과`}</Divider>
            {postsData?.map((post: IPost) => (
              <Col span={4} key={post.id}>
                <PostCard key={post.id} post={post} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const posts = await fetcher(`/api/posts/tag/${encodeURIComponent(context.params?.tagName)}?lastId=0`);
  return { props: { posts } };
});

export default TagPage;
