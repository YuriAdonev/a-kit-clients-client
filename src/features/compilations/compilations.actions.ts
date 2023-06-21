import { AnyAction } from 'redux'
import * as actionType from './compilations.types'
import {CompilationsState} from "./compilations.reducer";
import {CompilationsService} from '../../services/compilations-service'
import {UserState} from '../user/user.reducer'
import {CompilationItemTypes} from '../compilation-item/compilation-item.reducer'
import {getUser} from '../user/user.actions'
import {fetchCompilationItem} from '../compilation-item/compilation-item.actions'

export const setCompilationsModalCreateIsOpen = (value: boolean): AnyAction => ({ type: actionType.COMPILATIONS_SET_MODAL_CREATE_IS_OPEN, payload: value })
export const setCompilationsModalAddAnalogsIsOpen = (value: boolean): AnyAction => ({ type: actionType.COMPILATIONS_SET_MODAL_ADD_ANALOGS_IS_OPEN, payload: value })
export const setCompilationsList = (value: CompilationItemTypes[]): AnyAction => ({ type: actionType.COMPILATIONS_SET_LIST, payload: value })
export const setCompilationsCount = (value: number): AnyAction => ({ type: actionType.COMPILATIONS_SET_COUNT, payload: value })
export const setCompilationsCurrent = (value: CompilationItemTypes | null): AnyAction => ({ type: actionType.COMPILATIONS_SET_CURRENT, payload: value })

export const createCompilation = (name: string) => async (dispatch: any, getState: () => { user: UserState }) => {
  const { user } = getState()
  if (user.current?.lastName && user.current?.firstName) {
    dispatch({ type: actionType.COMPILATIONS_CREATE_START })
    try {
      const data = await CompilationsService.create({
        title: name
      })
      dispatch({ type: actionType.COMPILATIONS_CREATE_SUCCESS })
      dispatch(setCompilationsModalCreateIsOpen(false))
      dispatch(getCompilationList())
      dispatch(getUser())
      dispatch(fetchCompilationItem(data.id))
      console.log('createCompilation', data)
    } catch (err) {
      dispatch({ type: actionType.COMPILATIONS_CREATE_FAIL })
    }
  }
}

export const getCompilationList = () => async (dispatch: (arg0: { type: string; }) => void, getState: () => { user: UserState }) => {
  const { user } = getState()
  if (user.current?.lastName && user.current?.firstName) {
    dispatch({ type: actionType.COMPILATIONS_GET_LIST_START })
    try {
      const data = await CompilationsService.getList()
      dispatch({ type: actionType.COMPILATIONS_GET_LIST_SUCCESS })
      dispatch(setCompilationsCount(data.count))
      dispatch(setCompilationsList(data.items))
    } catch (err) {
      dispatch({ type: actionType.COMPILATIONS_GET_LIST_FAIL })
    }
  }
}
