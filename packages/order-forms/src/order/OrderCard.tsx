import * as React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {OrderSelect} from '@olegsmetanin/order-components'
import { orderCardLoadActions } from './orderDucks'
import { IOrder } from './interfaces'

export const OrderCardStyle = styled.div`
  color: ${(props) => props.theme.text.primary};
`
export const OrderCard = ({name, value}) => {

  const dispatch = useDispatch()

  var resolvedValue: IOrder = useSelector((state: any) => state.select[value])
  // useSelector((state: any) => state.select[value])

  // resolvedValue = useSelector((state: any) => state.select[value])
  useEffect(() => {
    // resolvedValue = useSelector((state: any) => state.select[value])
    console.log('OrderCard useEffect', resolvedValue)
    if (!resolvedValue) {
      dispatch(orderCardLoadActions.request({id: value}))
    }
    // Обновляем заголовок документа с помощью API браузера

  })

  // const resolvedValue = {id: value, order_id: 'OrderID'}
  return resolvedValue ? (
    <OrderCardStyle>OrderCard{name}{value}
      <OrderSelect name={name+'_order_id'} value={resolvedValue.id}/>
    </OrderCardStyle>
  ) : null
}
