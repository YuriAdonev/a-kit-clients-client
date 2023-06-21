import { AnyAction } from 'redux'
import * as actionType from './app.types'
import { setIsLoggedIn } from '../auth/auth.actions'
import { AuthService } from '../../services/auth-service'
import { setUser } from '../user/user.actions'
import { UsersService } from '../../services/users-service'
import {fetchCompilationItem} from '../compilation-item/compilation-item.actions'
import {setCompilationsCurrent} from '../compilations/compilations.actions'

export const setAppIsLoading = (value: boolean): AnyAction => ({ type: actionType.APP_SET_APP_IS_LOADING, payload: value })

export const appInitialize = () => async (dispatch: any) => {
  try {
    const data = await AuthService.getAuth()
    if (data.currentAuth) {
      const userData = await UsersService.getUser()
      dispatch(setUser(userData))
      dispatch(fetchCompilationItem(userData.currentCompilationId))
      dispatch(setIsLoggedIn(true))
    } else {
      dispatch(setUser(null))
      dispatch(setCompilationsCurrent(null))
      dispatch(setIsLoggedIn(false))
    }
  } catch (e) {
    dispatch(setIsLoggedIn(false))
  }

  dispatch(setAppIsLoading(false))
}
