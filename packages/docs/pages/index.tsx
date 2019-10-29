import React from 'react'
import styled from 'styled-components'
import { OrderCard } from '@olegsmetanin/order-forms'


const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => <Title>My page1<OrderCard cid={'qwe'} value={123}/></Title>