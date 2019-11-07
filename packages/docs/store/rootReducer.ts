import { combineReducers } from 'redux'
import { setStateReducerCreator } from '@olegsmetanin/uikit-redux'

// export const initialState = {
//   select: {}
// }

// export const rootReducer = setStateReducerCreator(initialState)

export const rootReducer = combineReducers({
  select: setStateReducerCreator('select')
})


