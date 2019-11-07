import React from 'react'
import styled from 'styled-components'
import { OrderCard } from '@olegsmetanin/order-forms'

const Title = styled.div`
  font-size: 50px;
`

export default () => (
    <React.Fragment>
    <Title>My page4
      <OrderCard name="qwe" value={123}/>
    </Title>
    </React.Fragment>
)