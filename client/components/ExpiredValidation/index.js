import React, { useCallback, useState } from 'react';
import { Row, Col, Form, Input, Button, Typography, Modal } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import useInput from '../../hooks/useInput.ts';

const { Paragraph } = Typography;

const ExpiredValidation = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [visibleInput, setVisibleInput] = useState(false);
  const [email, onChangeEmail] = useInput('');

  const onClickRequest = useCallback(() => {
    setVisibleInput(true);
  }, []);

  const onFinish = useCallback(() => {
    setIsLoading(true);
    axios
      .post('/api/user/mail', { email })
      .then(() => {
        Modal.success({
          title: '이메일이 전송되었습니다',
          content: '이메일이 전송되었습니다. 메일확인을 부탁드려요!',
          okText: '확인',
        });
        setIsLoading(false);
        router.replace('/');
      })
      .catch((error) => {
        console.error(error);
        Modal.error({
          title: '🤔 메일주소를 확인해 주세요.',
          content: '가입되지 않았거나 이미 인증이 완료된 계정입니다.',
          okText: '확인',
        });
        setIsLoading(false);
      });
  }, [email]);

  return (
    <Row justify="center" align="middle" style={{ height: '100vh', textAlign: 'center' }}>
      <Col xs={24} md={4}>
        <Paragraph>가입시 전송된 이메일로 인증을 진행해주세요!!</Paragraph>
        <Paragraph>메일을 받지 못하셨다면 다시 요청해 주세요.</Paragraph>
        {visibleInput ? (
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item>
              <Input type="email" onChange={onChangeEmail} value={email} size="large" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading} size="large" block>
                인증메일 보내기
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Button type="primary" onClick={onClickRequest} size="large" block>
            인증 메일 요청
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default ExpiredValidation;
