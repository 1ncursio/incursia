import React, { useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Form, Input, Typography, Modal, Avatar, Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import useSWR from 'swr';
import useInput from './hooks/useInput';
import { CHANGE_PROFILE_REQUEST, CHANGE_NICKNAME_REQUEST, CHANGE_INTRO_REQUEST } from '../reducers/user';
import fetcher from '../util/fetcher';

const { TextArea } = Input;
const { Text } = Typography;

const ProfileForm = () => {
  const { data: userData, error: userError, mutate: userMutate } = useSWR('/api/user', fetcher);

  const {
    changeNicknameLoading,
    changeNicknameDone,
    changeNicknameError,
    changeIntroLoading,
    changeIntroDone,
    changeIntroError,
  } = useSelector((state) => state.user);

  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [intro, onChangeIntro, setIntro] = useInput('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      setIntro(userData.introduction);
      setNickname(userData.nickname);
    }
  }, [userData?.introduction, userData?.nickname]);

  useEffect(() => {
    if (changeNicknameError) {
      Modal.error({
        content: '닉네임 변경 중에 오류가 발생했어요.',
      });
    }
  }, [changeNicknameError]);

  useEffect(() => {
    if (changeNicknameDone) {
      Modal.success({
        content: '닉네임을 변경했어요!',
      });
    }
  }, [changeNicknameDone]);

  useEffect(() => {
    if (changeIntroError) {
      Modal.error({
        content: '자기소개 변경 중에 오류가 발생했어요.',
      });
    }
  }, [changeIntroError]);

  useEffect(() => {
    if (changeIntroDone) {
      Modal.success({
        content: '자기소개를 변경했어요!',
      });
    }
  }, [changeIntroDone]);

  const beforeUpload = useCallback((file) => {
    if (file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png') {
      message.error('jpg jpeg png 사진만 가능해요!');
      return false;
    }
    if (file.size > 2 * 1024 * 1024) {
      message.error('프로필 이미지는 2MB 이하만 가능해요!');
      return false;
    }
    const imageFormData = new FormData();
    imageFormData.append('image', file);

    dispatch({
      type: CHANGE_PROFILE_REQUEST,
      data: imageFormData,
    });
    return true;
  });

  const onSubmitNickname = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
    userMutate(
      {
        ...userData,
        nickname,
      },
      false
    );
  }, [nickname]);

  const onSubmitChangeIntro = useCallback(() => {
    dispatch({
      type: CHANGE_INTRO_REQUEST,
      data: intro,
    });
    userMutate(
      {
        ...userData,
        introduction: intro,
      },
      false
    );
  }, [intro]);

  const onUpload = useCallback(() => {
    userMutate();
  });

  const style = useMemo(() => ({ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px' }), []);
  return (
    <Col xs={24} md={12}>
      <Form style={style} layout="vertical">
        <Form.Item style={{ textAlign: 'center' }}>
          <ImgCrop rotate quality={0.8} modalTitle="이미지 조정" modalOk="저장" modalCancel="취소">
            <Upload showUploadList={false} accept=".jpg,.jpeg,.png" beforeUpload={beforeUpload} onChange={onUpload}>
              {userData && (
                <Avatar src={userData.profile ? `http://localhost:3100/${userData.profile}` : null} size={256}>
                  {userData.profile ? null : userData.nickname[0]}
                </Avatar>
              )}
            </Upload>
          </ImgCrop>
        </Form.Item>
        <Form.Item label={<Text strong>이메일</Text>}>
          <Text type="secondary">{userData?.email}</Text>
        </Form.Item>
        <Form.Item label={<Text strong>닉네임</Text>}>
          <Input
            value={nickname}
            onChange={onChangeNickname}
            maxLength="20"
            suffix={<Text type="secondary">{` ${nickname?.length} / 20`}</Text>}
          />
          <Button
            type="primary"
            onClick={onSubmitNickname}
            loading={changeNicknameLoading}
            disabled={userData?.nickname === nickname || nickname === '' || nickname.trim() === ''}
          >
            변경
          </Button>
        </Form.Item>
        <Form.Item label={<Text strong>자기소개</Text>}>
          <TextArea
            placeholder="당신을 멋지게 소개해보세요!"
            value={intro}
            onChange={onChangeIntro}
            rows="5"
            spellCheck={false}
            style={{ resize: 'none' }}
            showCount
            maxLength="500"
          />
        </Form.Item>
        <Form.Item style={{ textAlign: 'center' }}>
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={onSubmitChangeIntro}
            loading={changeIntroLoading}
            disabled={userData?.introduction === intro}
            style={{
              width: 200,
            }}
          >
            저장
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default ProfileForm;
