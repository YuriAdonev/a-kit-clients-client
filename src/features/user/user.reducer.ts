import { AnyAction } from 'redux'
import * as actionType from './user.types'

export interface IUser {
  userId: string
  email: string
  firstName: string | null
  lastName: string | null
  middleName: string | null
  companyId: string | null
  role: 'user' | 'admin' | 'root'
  currentCompilationId: string | null
  subscriptions: {
    compilations: boolean,
    kadastr: boolean,
    valuations: boolean
  }
}

export interface UserState {
  current: IUser | null
}

const initialState: UserState = {
  current: null
}

export const userReducer = (state = initialState, { type, payload }: AnyAction): UserState => {
  switch (type) {
    case actionType.USER_SET: {
      return { ...state, current: payload }
    }
    default:
      return state
  }
}
