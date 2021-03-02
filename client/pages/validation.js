import { Button, Input, Form } from 'antd';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import useInput from '../components/hooks/useInput';
import { fetcherPatch } from '../util/fetcher';

const validation = () => {
  const router = useRouter();
  const { token } = router.query;
  const [isValidated, setIsValidated] = useState(false);
  const [visibleInput, setVisibleInput] = useState(false);
  const [email, onChangeEmail, setEmail] = useInput('');

  useEffect(() => {
    fetcherPatch(token ? '/api/user/validation' : null, { token })
      .then(() => {
        setIsValidated(true);
        console.log('good');
      })
      .catch((err) => {
        setIsValidated(false);
        console.error(err);
      });
  }, [token]);

  const onClickRequest = useCallback(() => {
    setVisibleInput(true);
  }, []);

  const onFinish = useCallback(() => {
    console.log(email);
  }, [email]);

  if (!isValidated) {
    return (
      <>
        <div>인증이 완료되었거나, 유효시간이 지났습니다.</div>
        <div>인증을 다시 시도하려면, 인증메일을 요청해 주세요!</div>
        {visibleInput ? (
          <Form onFinish={onFinish} layout="vertical">
            <Input type="email" onChange={onChangeEmail} value={email} />
            <Button type="primary" htmlType="submit">
              인증메일 보내기
            </Button>
          </Form>
        ) : (
          <Button onClick={onClickRequest}>인증메일 요청</Button>
        )}
      </>
    );
  }

  return <div>인증됨!</div>;
};

export default validation;
