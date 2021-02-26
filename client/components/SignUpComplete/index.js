import React from 'react';
import { Typography } from 'antd';
import { TitleWrapper } from './styles';

const { Title, Paragraph } = Typography;

const SignUpComplete = () => {
  return (
    <>
      <Title level={3}>인증 메일을 보내드렸어요!</Title>
      <Title level={3}>인증 메일을 확인해주세요 ✉</Title>
      <Paragraph>반가워요. 유토피아에 오신 것을 환영해요 🙌 </Paragraph>
      <Paragraph>아직 한단계가 더 남았어요! 가입하신 이메일을 인증해주시면,</Paragraph>
      <Paragraph>유토피아의 서비스를 마음껏 이용하실 수 있습니다.</Paragraph>
      <Paragraph>🙇‍♂️ 가입해주셔서 다시 한 번 감사드립니다 🙇‍♂️</Paragraph>
    </>
  );
};

export default SignUpComplete;
