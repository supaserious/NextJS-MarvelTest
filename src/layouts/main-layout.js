import React from 'react';

import Head from 'next/head';
import Header from '../components/Header/header';

const MainLayout = ({ children, title = 'Default title' }) => (
  <div className="container">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <main>{children}</main>
  </div>
);
export default MainLayout;
