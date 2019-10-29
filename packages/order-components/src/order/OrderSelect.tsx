import { select } from '@olegsmetanin/uikit-redux'
import {OrderValue} from './OrderValue'

export const OrderSelect = select(OrderValue)

// const {resolveActions, filterActions, selectSagas, } = selectDucks(
//   actionPrefix,
//   url,
//   statePath)

// export const OrderSelect = select({
//   resolveActions,
//   filterActions,
//   ValueComponent: OrderValue
// })

// <OrderSelect cid={guid} value={this.props.order_id}/>