import { Button, Checkbox, Form, Input, Modal } from 'antd';
import Head from 'next/head';
import React, { useCallback, useState } from 'react';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '@hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';

const ErrorMessage = styled.div`
  color: red;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormItemWrapper = styled(Form.Item)`
  margin-bottom: 5px;
`;

const SignupForm = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state: any) => state.user);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const [passwordError, setpasswordError] = useState(false);
  const [Term, setTerm] = useState(false);
  const [TermError, setTermError] = useState(false);

  const onChangeConfirmpassword = useCallback(
    (e) => {
      setConfirmpassword(e.target.value);
      setpasswordError(e.target.value !== password);
    },
    [password],
  );

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onFinish = useCallback(() => {
    if (!email || !nickname || !password || !Confirmpassword) {
      Modal.error({
        title: '회원가입 오류',
        content: '빈 칸을 작성해 주세요.',
      });
    }
    if (password !== Confirmpassword) {
      return setpasswordError(true);
    }
    if (!Term) {
      return setTermError(true);
    }
    console.log(email, nickname, password);
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, Confirmpassword, Term]);

  return (
    <>
      <Head>
        <title>회원가입 | 인크루시아</title>
      </Head>

      <Form onFinish={onFinish} layout="vertical">
        <FormItemWrapper>
          <Input type="email" value={email} onChange={onChangeEmail} placeholder="이메일" size="large" />
        </FormItemWrapper>
        <FormItemWrapper>
          <Input type="text" value={nickname} onChange={onChangeNickname} placeholder="닉네임" size="large" />
        </FormItemWrapper>
        <FormItemWrapper>
          <Input
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호 (최소 8자)"
            size="large"
          />
        </FormItemWrapper>
        <FormItemWrapper>
          <Input
            type="password"
            value={Confirmpassword}
            onChange={onChangeConfirmpassword}
            placeholder="비밀번호 확인"
            size="large"
          />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </FormItemWrapper>
        <FormItemWrapper>
          <Checkbox checked={Term} onChange={onChangeTerm}>
            인크 말을 잘 들을 것을 동의
          </Checkbox>
          {TermError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </FormItemWrapper>
        <FormItemWrapper>
          <ButtonWrapper>
            <Button type="primary" htmlType="submit" loading={signUpLoading} size="large" shape="round" block>
              회원가입
            </Button>
          </ButtonWrapper>
        </FormItemWrapper>
      </Form>
    </>
  );
};

// SignupForm.propTypes = {
//   onClickLogIn: PropTypes.func.isRequired,
// };

export default SignupForm;
