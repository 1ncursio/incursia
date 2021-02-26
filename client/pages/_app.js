import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// import 'antd/dist/antd.css';
import '../style/my_custom.css';
import { createGlobalStyle } from 'styled-components';
import { CookiesProvider } from 'react-cookie';
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

const Utopia = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>유토피아</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Global />
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </>
  );
};

Utopia.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Utopia);
