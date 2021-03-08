import { Button, Input, Form, Modal } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import useInput from '@hooks/useInput';
import { fetcherPatch } from '@utils/fetcher';

const validation = () => {
  const router = useRouter();
  const { token } = router.query;
  const [isValidated, setIsValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleInput, setVisibleInput] = useState(false);
  const [email, onChangeEmail] = useInput('');

  useEffect(() => {
    fetcherPatch(token ? '/api/user/validation' : null, { token })
      .then(() => {
        setIsValidated(true);
        console.log('good');
      })
      .catch((error) => {
        setIsValidated(false);
        console.error(error);
      });
  }, [token]);

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

  if (!isValidated) {
    return (
      <>
        <div>인증이 완료되었거나, 유효시간이 지났습니다.</div>
        <div>인증을 다시 시도하려면, 인증메일을 요청해 주세요!</div>
        {visibleInput ? (
          <Form onFinish={onFinish} layout="vertical">
            <Input type="email" onChange={onChangeEmail} value={email} />
            <Button type="primary" htmlType="submit" loading={isLoading}>
              인증메일 보내기
            </Button>
          </Form>
        ) : (
          <Button type="primary" onClick={onClickRequest}>
            인증메일 요청
          </Button>
        )}
      </>
    );
  }

  return <div>인증됨!</div>;
};

export default validation;
