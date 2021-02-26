import React, { useEffect } from 'react';
import { Col, Row, List, Typography, Space } from 'antd';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import Link from 'next/link';
import AppLayout from '../../../components/AppLayout';
import { fetcher } from '../../../util/fetcher';
import UserPageMenu from '../../../components/UserPageMenu';
import wrapper from '../../../store/configureStore';
import UserPageProfile from '../../../components/UserPageProfile';
import UserAvatar from '../../../components/UserAvatar';
import { MenuHeader, MenuHeaderWrapper } from './style';

const { Text, Title } = Typography;

const UserFollowers = ({ user: initialUser, followings: initialFollowers }) => {
  const router = useRouter();

  const { id } = router.query;

  const { data: userData } = useSWR(`/api/user/${id}`, fetcher, { initialData: initialUser });
  const { data: followersData } = useSWR(`/api/user/${id}/followers`, fetcher, { initialData: initialFollowers });

  useEffect(() => {
    if (followersData) console.log(followersData);
  }, [followersData]);

  return (
    <AppLayout>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          <UserPageProfile userData={userData} />
          <UserPageMenu current="followers" userId={parseInt(id, 10)} />
          <MenuHeaderWrapper>
            <MenuHeader>{`${followersData.length}명의 팔로워`}</MenuHeader>
          </MenuHeaderWrapper>
          <Row gutter={8}>
            <List
              dataSource={followersData}
              renderItem={(item) => (
                <List.Item>
                  <Space size="large">
                    <Link href={`/user/${item.id}/illustration`}>
                      <a>
                        <UserAvatar userData={item} marginRight={8} size="large" />
                      </a>
                    </Link>
                    {item.introduction.length >= 50 ? (
                      <Text type="secondary">{`${item.introduction.slice(0, 50)}...`}</Text>
                    ) : (
                      <Text type="secondary">{item.introduction}</Text>
                    )}
                  </Space>
                </List.Item>
              )}
            />
          </Row>
        </Col>
      </Row>
    </AppLayout>
  );
};

UserFollowers.propTypes = {
  user: PropTypes.object.isRequired,
  followings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const user = await fetcher(`/api/user/${context.params.id}`);
  const followings = await fetcher(`/api/user/${context.params.id}/followers`);
  return { props: { user, followings } };
});

export default UserFollowers;
