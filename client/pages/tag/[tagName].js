import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Divider } from 'antd';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import fetcher from '../../util/fetcher';
import wrapper from '../../store/configureStore';

const TagPage = ({ posts: initialPosts }) => {
  const router = useRouter();
  const { tagName } = router.query;

  const { hasMorePosts } = useSelector((state) => state.post);

  const { data: postsData } = useSWR(`/api/posts/tag/${encodeURIComponent(tagName)}?lastId=0`, fetcher, { initialData: initialPosts });

  return (
    <AppLayout>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          <Row gutter={[8, 8]}>
            <Divider orientation="left">{`${tagName} - 태그 검색 결과`}</Divider>
            {postsData?.map((post) => (
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

TagPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const posts = await fetcher(`/api/posts/tag/${encodeURIComponent(context.params.tagName)}?lastId=0`);
  return { props: { posts } };
});

export default TagPage;
