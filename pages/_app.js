import React from 'react';

import App from 'next/app';
import MainLayout from '../src/layouts/main-layout';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './../src/styles/main-theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={mainTheme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    );
  }
}
export default MyApp;
