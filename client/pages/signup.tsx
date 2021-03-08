import { Card, Col, Modal, Row, Space, Typography } from 'antd';
import React, { useEffect } from 'react';
import Router from 'next/router';
// @ts-ignore
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useSWR from 'swr';
import SignupForm from '../components/SignupForm';
import { fetcher } from '../util/fetcher';
import SignUpComplete from '../components/SignUpComplete';

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url('https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const { Text, Title } = Typography;

const CardWrapper = styled(Card)`
  height: 500px;
  opacity: 0.9;
  border-radius: 5px;
  text-align: center;
`;

const TitleWrapper = styled(Title)`
  margin-bottom: 0;
`;

const signup = () => {
  const { signUpLoading, signUpDone, signUpError } = useSelector((state: any) => state.user);

  const { data: userData } = useSWR('/api/user', fetcher);

  useEffect(() => {
    if (userData) {
      Router.replace('/');
    }
  }, [userData]);

  useEffect(() => {
    if (signUpError) {
      Modal.error({
        content: signUpError,
      });
    }
  }, [signUpError]);

  return (
    <>
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <Col xs={24} md={6}>
          <CardWrapper>
            <Space direction="vertical" style={{ width: '90%' }}>
              <TitleWrapper level={1}>유토피아</TitleWrapper>
              <Text type="secondary">당신의 그림을 공유해보세요</Text>
              <br />
              {/* <SignupForm /> */}
              {signUpDone ? <SignUpComplete /> : <SignupForm />}
              {/* <SignUpComplete /> */}
            </Space>
          </CardWrapper>
        </Col>
      </Row>
      <BackgroundImage />
    </>
  );
};

export default signup;
