import React from 'react'

import App from 'next/app'
import MainLayout from '../src/layouts/main-layout'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './../src/styles/main-theme'

class MyApp extends App {
  state = { isOpen: false }

  handleToggleIsOpen = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen }
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={mainTheme}>
        <MainLayout open={this.state.isOpen} setOpen={this.handleToggleIsOpen}>
          <Component {...pageProps} open={this.state.isOpen} />
        </MainLayout>
      </ThemeProvider>
    )
  }
}
export default MyApp
