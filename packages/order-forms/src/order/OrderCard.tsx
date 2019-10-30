import * as React from 'react'
import styled from 'styled-components'
import {OrderSelect} from '@olegsmetanin/order-components'


export const OrderCardStyle = styled.div`
  color: ${(props) => props.theme.text.primary};
`

export const OrderCard = ({cid, value}) => {
  const resolverValue = {id: value, cid, order_id: 'OrderID'}
  return (
    <OrderCardStyle>OrderCard
      <OrderSelect cid={123} value={resolverValue.order_id}/>
    </OrderCardStyle>
  )
}

// export const OrderCard = styled(OrderCardBase)`
// `
