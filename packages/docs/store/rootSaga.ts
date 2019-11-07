import { all } from 'redux-saga/effects'
import { orderCardSagas } from '@olegsmetanin/order-forms'
import { orderSelectSagas } from '@olegsmetanin/order-components'

export function* rootSaga() {
  yield all([
    ...orderCardSagas,
    ...orderSelectSagas,
  ])
}
