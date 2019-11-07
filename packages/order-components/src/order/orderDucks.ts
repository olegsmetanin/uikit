import { put, takeEvery } from 'redux-saga/effects'
import { createAsyncAction, getType } from 'typesafe-actions'
import { IListLoadResponse, ISelectQuery, ILoadError, setStateAction } from '@olegsmetanin/uikit-redux'
import { IOrderSelectValue } from './interfaces'

export const orderSelectLoadActions = createAsyncAction(
  'ORDER_SELECT/LOAD_BEGIN',
  'ORDER_SELECT/LOAD_SUCCESS',
  'ORDER_SELECT/LOAD_FAILURE'
)<ISelectQuery, IListLoadResponse<IOrderSelectValue>, ILoadError>()

export function* orderSelectLoadSaga(action: ReturnType<typeof orderSelectLoadActions.request>) {
  // const { url, query } = action.payload

  try {
    console.log('loadSelectCardSaga', action.payload)

    yield put(orderSelectLoadActions.success({data: [{id: 'qwe', customer: 'Customer', status: 'Active'}]}))
  } catch (error) {
    yield put(orderSelectLoadActions.failure({ error: {general: 'some error'} }))
  }
}

export function* orderSelectSaveSaga(action: ReturnType<typeof orderSelectLoadActions.success>) {
  // const { url, query } = action.payload

  try {
    console.log('loadSelectCardSaga', action.payload)

    yield put(setStateAction({path: 'select', payload: action.payload}))
  } catch (error) {
    yield put(orderSelectLoadActions.failure({ error: {general: 'some error'} }))
  }
}

export const orderSelectSagas = [
  takeEvery(getType(orderSelectLoadActions.request), orderSelectLoadSaga),
  takeEvery(getType(orderSelectLoadActions.success), orderSelectSaveSaga),
]