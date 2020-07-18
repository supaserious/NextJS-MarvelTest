import React, { useCallback, useState } from 'react'

import Head from 'next/head'
import Header from '../components/Header'

const MainLayout = ({ children, title = 'Default title', open, setOpen }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header open={open} setOpen={setOpen} />
    <main>{children}</main>
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: normal;
        box-sizing: border-box;
        font-family: 'Black Han Sans', sans-serif;
      }
      a {
        text-decoration: none;
      }
      ul,
      li {
        list-style: none;
      }
    `}</style>
  </>
)

export default MainLayout
