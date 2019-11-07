import { applyMiddleware, createStore } from 'redux'

import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = middleware => {
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  /* istanbul ignore next */
  return applyMiddleware(...middleware)
}

export let store

export function configureStore(initialState?: object) {
  const resultStore = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]))

  const runSagaTaskKey = 'runSagaTask'
  const sagaTask = 'sagaTask'

  resultStore[runSagaTaskKey] = () => {
    resultStore[sagaTask] = sagaMiddleware.run(rootSaga)
  }

  store = resultStore

  resultStore[runSagaTaskKey]()
  return resultStore
}
