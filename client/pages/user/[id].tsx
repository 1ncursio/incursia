import React, { useEffect } from 'react';
import { Row, Col, Avatar } from 'antd';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import AppLayout from '@components/AppLayout';
import { IUser } from '@typings/IUser';
import wrapper from '../../store/configureStore';

interface Props {
  user: IUser;
}

const UserPage = ({ user: initialUserData }: Props) => {
  const { data: userData } = useSWR('/api/user', fetcher, { initialData: initialUserData });

  useEffect(() => {
    console.log(userData);
  }, []);

  return (
    <AppLayout>
      <Row justify="center" gutter={16}>
        <Col span={12}>
          <Avatar src={userData?.profile ? `http://localhost:3100/${userData?.profile}` : null} size={64}>
            {userData?.profile ? null : userData?.nickname[0]}
          </Avatar>
        </Col>
      </Row>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const user = await fetcher(`/api/user/${context.params?.id}`);
  return { props: { user } };
});

export default UserPage;