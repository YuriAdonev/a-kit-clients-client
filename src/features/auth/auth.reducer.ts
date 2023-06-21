import { AnyAction } from 'redux'
import * as actionType from './auth.types'

export interface AuthState {
  isLoggedIn: boolean
  isLoading: boolean
  errorMsg: string
}

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
  errorMsg: ''
}

export const authReducer = (state = initialState, { type, payload }: AnyAction): AuthState => {
  switch (type) {
    case actionType.AUTH_LOGIN_START: {
      return { ...state, isLoading: true }
    }
    case actionType.AUTH_LOGIN_SUCCESS: {
      return { ...state, isLoading: false }
    }
    case actionType.AUTH_LOGIN_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload }
    }
    case actionType.AUTH_LOGOUT_START: {
      return { ...state, isLoggedIn: false }
    }
    case actionType.AUTH_LOGOUT_SUCCESS: {
      return { ...state, isLoading: false }
    }
    case actionType.AUTH_LOGOUT_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload }
    }
    case actionType.AUTH_REGISTER_START: {
      return { ...state, isLoading: true }
    }
    case actionType.AUTH_REGISTER_SUCCESS: {
      return { ...state, isLoading: false }
    }
    case actionType.AUTH_REGISTER_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload }
    }
    case actionType.AUTH_SET_IS_LOGGED_IN: {
      return { ...state, isLoggedIn: payload }
    }
    default:
      return state
  }
}
