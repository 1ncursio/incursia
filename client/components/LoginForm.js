import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Form, Input, Button, Typography, Modal } from 'antd';
import styled from 'styled-components';
import useSWR from 'swr';
import useInput from './hooks/useInput';
import { loginRequestAction } from '../reducers/user';
import fetcher from '../util/fetcher';
import { useRouter } from 'next/router';

const { Text } = Typography;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormItemWrapper = styled(Form.Item)`
  margin-bottom: 5px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    if (logInError) {
      Modal.error({
        content: logInError.message,
      });
    }
  }, [logInError]);

  const onFinish = useCallback(() => {
    if (!email || !password) {
      return Modal.error({
        title: '로그인 오류',
        content: '이메일 또는 비밀번호를 입력해 주세요.',
      });
    }
    console.log({ email, password });
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <Form onFinish={onFinish} layout="vertical">
      <FormItemWrapper>
        <Input type="email" value={email} onChange={onChangeEmail} placeholder="이메일" size="large" />
      </FormItemWrapper>
      <FormItemWrapper>
        <Input type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" size="large" />
      </FormItemWrapper>
      <FormItemWrapper>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={logInLoading} size="large" shape="round" block>
            로그인
          </Button>
        </ButtonWrapper>
      </FormItemWrapper>
      <FormItemWrapper>
        <Link href="/signup">
          <a>
            <Button htmlType="submit" size="large" shape="round" block>
              회원가입
            </Button>
          </a>
        </Link>
      </FormItemWrapper>
      <FormItemWrapper>
        <Text type="secondary" style={{ float: 'right' }}>
          비밀번호를 모르겠어요
        </Text>
      </FormItemWrapper>
    </Form>
  );
};

export default LoginForm;
