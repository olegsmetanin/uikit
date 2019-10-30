import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { OrderCard } from '@olegsmetanin/order-forms'
import { theme } from '../theme'

const Title = styled.h1`
  font-size: 50px;
`

export default () => (
  <ThemeProvider theme={theme}>
    <Title>My page1<OrderCard cid={'qwe'} value={123}/></Title>
  </ThemeProvider>
)