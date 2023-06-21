import { AnyAction } from 'redux'
import * as actionType from './app.types'

export interface AppState {
  appIsLoading: boolean
}

const initialState: AppState = {
  appIsLoading: true
}

export const appReducer = (state = initialState, { type, payload }: AnyAction): AppState => {
  switch (type) {
    case actionType.APP_SET_APP_IS_LOADING: {
      return { ...state, appIsLoading: payload }
    }
    default:
      return state
  }
}
