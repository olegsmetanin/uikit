import { put, takeEvery } from 'redux-saga/effects'
import { createAsyncAction, getType } from 'typesafe-actions'
//IItemLoadResponse,
import { IIdQuery, ILoadError, setStateAction } from '@olegsmetanin/uikit-redux'
// import { orderSelectLoadActions } from '@olegsmetanin/order-components'
import { IOrder } from './interfaces'

export const orderCardLoadActions = createAsyncAction(
  'ORDERCARD/LOAD_BEGIN',
  'ORDERCARD/LOAD_SUCCESS',
  'ORDERCARD/LOAD_FAILURE'
)<IIdQuery, IOrder, ILoadError>()

export function* orderCardLoadSaga(action: ReturnType<typeof orderCardLoadActions.request>) {
  const { id } = action.payload

  try {
    console.log('orderCardLoadSaga', action.payload)

    // yield put(orderSelectLoadActions.request({id}))


    yield put(orderCardLoadActions.success({id, customer: 'Customer', status: 'Active'}))

  } catch (error) {
    yield put(orderCardLoadActions.failure({ error: {general: 'some error'} }))
  }
}

export function* orderCardSaveSaga(action: ReturnType<typeof orderCardLoadActions.success>) {
  // const { url, query } = action.payload

  try {
    console.log('orderCardSaveSaga', action.payload)

    yield put(setStateAction({path: 'select', payload: {[action.payload.id]: action.payload}}))
  } catch (error) {
    yield put(orderCardLoadActions.failure({ error: {general: 'some error'} }))
  }
}

export const orderCardSagas = [
  takeEvery(getType(orderCardLoadActions.request), orderCardLoadSaga),
  takeEvery(getType(orderCardLoadActions.success), orderCardSaveSaga),
]