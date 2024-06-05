// pages/_app.js
import React from 'react';
// import '../styles/globals.css'; // 如果有全局样式文件

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;