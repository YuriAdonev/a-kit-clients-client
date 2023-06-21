import {AnyAction} from "redux";
import * as actionType from './user.types'
import {UsersService} from '../../services/users-service'
import {setIsLoggedIn} from '../auth/auth.actions'
import {IUser} from './user.reducer'
import {fetchCompilationItem} from '../compilation-item/compilation-item.actions'

interface AddUserProps {
  firstName: string
  lastName: string
  middleName: string
}

export const setUser = (value: IUser | null): AnyAction => ({ type: actionType.USER_SET, payload: value })

export const addUserInfo = ({ firstName, lastName, middleName }: AddUserProps) => async (dispatch: any) => {
  dispatch({ type: actionType.USER_ADD_START })

  try {
    const data = await UsersService.setUser({
      firstName, lastName, middleName
    })

    dispatch({ type: actionType.USER_ADD_SUCCESS })
    dispatch(setUser(data))
  } catch (err) {
    dispatch({ type: actionType.USER_ADD_FAIL })
    dispatch(setUser(null))
  }
}

export const getUser = () => async (dispatch: (arg0: any) => void) => {
  dispatch({ type: actionType.USER_GET_START })

  try {
    const data = await UsersService.getUser()
    dispatch({ type: actionType.USER_GET_SUCCESS })
    dispatch(setUser(data || null))
    if (data.currentCompilationId) {
      dispatch(fetchCompilationItem(data.currentCompilationId))
    }
  } catch (err) {
    dispatch({ type: actionType.USER_GET_FAIL })
    dispatch(setUser(null))
  }

  dispatch(setIsLoggedIn(true))
}
