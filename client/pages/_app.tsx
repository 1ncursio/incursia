import React, { ElementType } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
// import '../style/my_custom.css';
import { createGlobalStyle } from 'styled-components';
// @ts-ignore
import wrapper from '../store/configureStore';

const Global = createGlobalStyle`
    body {
      font-family: 'Noto Sans KR';
      background-color: #f8f9fa;
    }

    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .ant-col:first-child {
        padding-left: 0 !important;
    }

    .ant-col:last-child {
        padding-right: 0 !important;
    }
`;

type Props = {
  Component: ElementType;
  pageProps: any;
};

const Utopia = ({ Component, pageProps }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>유토피아</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Global />
      <Component {...pageProps} />
    </>
  );
};

Utopia.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(Utopia);
