import * as React from 'react'
import { IOrderSelectValue } from './interfaces'

export const OrderSelectValue = (props: IOrderSelectValue) => (
  <div>{props.id} - {props.customer} - {props.status}</div>
)
