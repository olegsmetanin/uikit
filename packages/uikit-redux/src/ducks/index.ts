import { createAction, createReducer, ActionType } from 'typesafe-actions'
// import set from 'lodash/set'


export interface ISetStateAction {
  path: string
  payload: object
}

export const setStateAction = createAction('state/SET')<ISetStateAction>()


type Action = ActionType<typeof setStateAction>

export interface IState {
  [key: string]: any
}

export const initialState: IState = {}

export const setStateReducerCreator = (_path) => createReducer<IState, Action>(initialState)
  .handleAction(setStateAction, (state, action) => {


    const { path, payload } = action.payload
    const res = {
      ...state,
      ...(path === _path ? payload : {})
    }
    console.log('handleAction setStateAction ', action, res)
    return res
  })

