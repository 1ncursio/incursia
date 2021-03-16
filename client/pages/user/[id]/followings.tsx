import React, { useEffect } from 'react';
import { Col, Row, List, Typography, Space } from 'antd';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import AppLayout from '@components/AppLayout';
import { fetcher } from '@utils/fetcher';
import UserPageMenu from '@components/UserPageMenu';
import UserPageProfile from '@components/UserPageProfile';
import UserAvatar from '@components/UserAvatar';
import { IUser } from '@typings/IUser';
import ExpiredValidation from '@components/ExpiredValidation';
import { MenuHeaderWrapper, MenuHeader } from '@pages/user/[id]/style';
import wrapper from '../../../store/configureStore';

const { Text } = Typography;

interface Props {
  user: IUser;
  followings: IUser[];
}

const UserFollowings = ({ user: initialUser, followings: initialFollowings }: Props) => {
  const router = useRouter();

  const { id } = router.query;

  const { data: userData } = useSWR(`/api/user/${id}`, fetcher, { initialData: initialUser });
  const { data: followingsData } = useSWR(`/api/user/${id}/followings`, fetcher, { initialData: initialFollowings });

  useEffect(() => {
    if (followingsData) console.log(followingsData);
  }, [followingsData]);

  if (userData?.status === 'pending') {
    return <ExpiredValidation />;
  }

  return (
    <AppLayout>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          <UserPageProfile userData={userData} />
          <UserPageMenu current="followings" userId={parseInt(id, 10)} />
          <MenuHeaderWrapper>
            <MenuHeader>{`${followingsData.length}명 팔로우 중`}</MenuHeader>
          </MenuHeaderWrapper>
          <Row gutter={8}>
            <List
              dataSource={followingsData}
              renderItem={(item: IUser) => (
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

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const user = await fetcher(`/api/user/${context.params?.id}`);
  const followings = await fetcher(`/api/user/${context.params?.id}/followings`);
  return { props: { user, followings } };
});

export default UserFollowings;
