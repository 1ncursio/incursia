import { Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import SignupForm from '../components/SignupForm';

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

const signup = () => {
  return (
    <>
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <Col xs={24} md={4}>
          <Card style={{ height: 430, textAlign: 'center', opacity: 0.9, borderRadius: 5 }}>
            <Space direction="vertical" style={{ width: '90%' }}>
              <Title level={1} style={{ margin: 0 }}>
                유토피아
              </Title>
              <Text type="secondary">당신의 그림을 공유해보세요</Text>
              <br />
              <SignupForm />
            </Space>
          </Card>
        </Col>
      </Row>
      <BackgroundImage />
    </>
  );
};

export default signup;
