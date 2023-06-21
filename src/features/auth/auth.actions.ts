import {AnyAction} from "redux";
import * as actionType from './auth.types'
import { AuthService } from "../../services/auth-service";
import {getUser, setUser} from '../user/user.actions'
import {appInitialize} from '../app/app.actions'
import {setCompilationsCurrent} from '../compilations/compilations.actions'

type UserTypes = {
  email: string
  password: string
}

export const setIsLoggedIn = (value: boolean): AnyAction => ({ type: actionType.AUTH_SET_IS_LOGGED_IN, payload: value })

export const authLogin = ({ email, password }: UserTypes) => async (dispatch: any) => {
  try {
    const data = await AuthService.login({
      email,
      password
    })

    if (data) {
      dispatch(getUser())
      // dispatch(setIsLoggedIn(true))
    }
  } catch (err) {
    dispatch(setIsLoggedIn(false))
  }
}

export const authLogout = () => async (dispatch: any) => {
  await AuthService.logout()
  window.location.replace("/");
  // dispatch(appInitialize())
}

export const authRegister = ({ email, password }: UserTypes) => async (dispatch: any) => {
  try {
    const data = await AuthService.register({
      email,
      password
    })

    if (data) {
      dispatch(setIsLoggedIn(true))
    }
  } catch (err) {
    dispatch(setIsLoggedIn(false))
  }
}

export const getAuth = () => async (dispatch: (arg0: { type: string; }) => void) => {
  AuthService.getAuth()
    .then((resp) => {
      if (resp.currentUser) {
        dispatch(setIsLoggedIn(true))
      } else {
        dispatch(setIsLoggedIn(false))
      }
    })
    .catch((error) => {
      dispatch(setIsLoggedIn(false))
    })
}
