import React, { useEffect, useCallback, useState } from 'react';
import { Col, Form, Input, Button, Typography, Upload, message, Modal, Row } from 'antd';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { PlusOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import useInput from '@hooks/useInput';
import AppLayout from '@components/AppLayout';
import TagForm from '@components/TagForm';
import { fetcher } from '@utils/fetcher';
import ExpiredValidation from '@components/ExpiredValidation';
import { UploadFile } from 'antd/lib/upload/interface';
import { UPLOAD_IMAGES_REQUEST, ADD_POST_REQUEST, REMOVE_IMAGE } from '../reducers/post';

// const { Option } = Select;
const { Paragraph } = Typography;
const { TextArea } = Input;

function getBase64(file: UploadFile<any>) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const upload = () => {
  const dispatch = useDispatch();

  const { data: userData } = useSWR('/api/user', fetcher);
  const { imagePaths, addedPostId } = useSelector((state) => state.post);

  useEffect(() => {
    if (!userData) {
      Router.replace('/login');
    }
  }, [userData]);

  useEffect(() => {
    if (addedPostId) {
      Router.replace(`/illustration/${addedPostId}`);
    }
  }, [addedPostId]);

  const [title, onChangeTitle] = useInput('');
  const [caption, onChangeCaption] = useInput('');
  const [tags, setTags] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [fileSize, setFileSize] = useState(0);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);

  const onCancel = useCallback(() => {
    setPreviewVisible(false);
  }, []);

  const onPreview = useCallback(async (file) => {
    console.log(file.originFileObj);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    console.log(file);
  }, []);

  const onChangeFileList = useCallback(({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
    const fileSizes = newFileList.map((file) => file.size);
    setFileSize(Math.round((fileSizes.reduce((p, c) => p + c, 0) / 1024 / 1024) * 100) / 100);
  }, []);

  const onRemoveFile = useCallback(
    (file) => {
      const fileIndex = fileList.findIndex((v) => v === file);
      console.log(fileIndex);
      dispatch({
        type: REMOVE_IMAGE,
        data: fileIndex,
      });
    },
    [fileList],
  );

  const beforeUpload = useCallback((file) => {
    if (file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png') {
      message.error('jpg jpeg png 사진만 가능해요!');
      return false;
    }
    if (file.size > 10 * 1024 * 1024) {
      message.error('이미지는 10MB 이하만 가능해요!');
      return false;
    }
    const imageFormData = new FormData();
    imageFormData.append('image', file);

    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });

    return true;
  }, []);

  const onFinish = useCallback(() => {
    console.log({ title, caption, tags, imagePaths });

    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        title,
        caption,
        tags,
        imagePaths,
      },
    });
    // Router.replace(`/illustration/${addedPostId}`)
  }, [title, caption, tags, imagePaths]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>업로드</div>
    </div>
  );

  if (userData?.status === 'pending') {
    return <ExpiredValidation />;
  }

  return (
    <AppLayout>
      <Row justify="center" gutter={16}>
        <Col span={12}>
          <Form onFinish={onFinish}>
            <Form.Item>
              <Paragraph>JPG JPEG GIF PNG</Paragraph>
              <Paragraph>1장당 10MB 이내, 최대 20장 업로드</Paragraph>
              <Paragraph>{`${fileList.length}장 ${fileSize}MB`}</Paragraph>
              <Upload
                name="image"
                accept=".jpg,.jpeg,.png,.gif"
                multiple
                maxCount={20}
                beforeUpload={beforeUpload}
                onPreview={onPreview}
                onChange={onChangeFileList}
                listType="picture-card"
                fileList={fileList}
                onRemove={onRemoveFile}
              >
                {fileList.length >= 20 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={onCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </Form.Item>
            <Form.Item>
              <Input type="text" value={title} onChange={onChangeTitle} placeholder="타이틀" />
            </Form.Item>
            <Form.Item>
              <TextArea rows={5} placeholder="캡션" value={caption} onChange={onChangeCaption} />
            </Form.Item>
            <Form.Item>
              <TagForm tags={tags} setTags={setTags} />
            </Form.Item>
            {/* <Form.Item>
          <Select defaultValue="public" value>
            <Option value="public">전체 공개</Option>
            <Option value="my" disabled>
              마이픽 공개
            </Option>
            <Option value="private">비공개</Option>
          </Select>
        </Form.Item> */}
            <Form.Item>
              <Paragraph>아래에 해당하는 작품의 업로드를 금지합니다. 업로드하시기 전에 확인해주세요.</Paragraph>
              <Paragraph>
                타인이 제작한 작품, 시판되는 상품의 이미지, 제삼자가 권리를 소유한 이미지, 게임 및 영상 작품의 캡처,
                스크린숏 이미지가 포함된 작품.
              </Paragraph>
              <Paragraph>위와 같은 이미지를 유용하여, 처음부터 모든 것을 본인이 직접 그리지 않은 작품.</Paragraph>
              <Paragraph>작품 이외의 피사체를 찍은 사진 이미지.</Paragraph>
              <Paragraph>
                이용약관에 위반하는 작품의 투고 유저는 투고 작품 공개 정지, 계정 정지의 대상이 됩니다.
              </Paragraph>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                업로드하기
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default upload;
