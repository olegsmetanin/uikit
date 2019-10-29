import * as React from 'react'
import {OrderSelect} from '@olegsmetanin/order-components'

export const OrderCard = ({cid, value}) => {
  const resolverValue = {id: value, cid, order_id: 'OrderID'}
  return (
    <div>OrderCard
      <OrderSelect cid={123} value={resolverValue.order_id}/>
    </div>
  )
}
