import React from 'react';
// @ts-ignore
import { useSelector } from 'react-redux';
import { Row, Col, Divider, List } from 'antd';
import useSWR from 'swr';
import AppLayout from '@components/AppLayout';
import { fetcher } from '@utils/fetcher';
import NoticeCard from '@components/NoticeCard';

const NoticesPage = () => {
  const { hasMorePosts } = useSelector((state: any) => state.post);

  const { data: userData } = useSWR('/api/user', fetcher);
  const { data: noticesData } = useSWR('/api/posts/notices?lastId=0', fetcher);

  return (
    <AppLayout>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          <Divider orientation="left">공지사항</Divider>
          <List>
            {noticesData?.map((notice) => (
              <List.Item key={notice.id}>
                <NoticeCard key={notice.id} notice={notice} />
              </List.Item>
            ))}
          </List>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default NoticesPage;
