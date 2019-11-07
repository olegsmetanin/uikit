import * as React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { NextPageContext } from 'next'
import { theme } from '../theme'
import { configureStore } from '../store/configureStore'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

interface IApp {
  store: any
  pageContext: any
}
interface IState {
  // staticRender?: boolean
  authenticated?: boolean
}
interface IGetInitialProps {
  Component: any
  ctx: NextPageContext
}

class MyApp extends App<IApp, IState> {
  static async getInitialProps({ Component, ctx }: IGetInitialProps) {
    // const { asPath, query } = ctx
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  state = {
    authenticated: null
  }
  firstRender: boolean = true

  componentDidMount() {
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
                  <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
    )
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp))
