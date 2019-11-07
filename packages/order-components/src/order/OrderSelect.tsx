import { select } from '@olegsmetanin/uikit-redux'
import { OrderSelectValue } from './OrderSelectValue'

export const OrderSelect = select(OrderSelectValue)

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