import { AnyAction } from 'redux'
import * as actionType from './compilation-item.types'
import {AnalogModel} from "../../models/analog-model";
import {AnalogsState} from "../analogs/analogs.reducer";
import {CompilationItemState, StructuralConditionItemTypes} from "./compilation-item.reducer";
import {setAnalogsSelectedList} from "../analogs/analogs.actions";
import {UserState} from '../user/user.reducer'
import {CompilationsService} from '../../services/compilations-service'
import {setCompilationsCurrent} from '../compilations/compilations.actions'

export const setCompilationList = (value: AnalogModel[]): AnyAction => ({ type: actionType.COMPILATION_SET_LIST, payload: value })
// export const addCompilationItemsToList = (value: AnnouncementModel[]): AnyAction => ({ type: actionType.COMPILATION_ADD_ITEMS_TO_LIST, payload: value })
// export const removeCompilationItemsFromList = (value: AnnouncementModel[]): AnyAction => ({ type: actionType.COMPILATION_REMOVE_ITEMS_FROM_LIST, payload: value })
export const setCompilationStructuralCondition = (value: {name: string, list: StructuralConditionItemTypes[]}): AnyAction => ({ type: actionType.COMPILATION_SET_STRUCTURAL_CONDITION, payload: value })
//
// export const addSelectedItemsToCompilation = () => async (dispatch: (arg0: { type: string; }) => void, getState: () => { announcements: AnnouncementsState, compilation: CompilationState }) => {
//   const { announcements, compilation } = getState()
//   const list: AnnouncementModel[] = []
//   announcements.selectedList.forEach((item: string) => {
//     const announcement = announcements.list.find((it: AnnouncementModel) => it.id === item)
//     if (announcement) {
//       list.push(announcement)
//     }
//   })
//   dispatch(addCompilationItemsToList([...list]))
//   dispatch(setAnnouncementSelectedList([]))
// }
//
export const addCompilationStructuralCondition = (name: 'area' | 'price', item: StructuralConditionItemTypes) => async (dispatch: (arg0: { type: string; }) => void, getState: () => { compilation: CompilationItemState }) => {
  const { compilation } = getState()
  const list = [...compilation.structuralCondition[name]]
  list.push(item)
  dispatch(setCompilationStructuralCondition({ name, list }))
}

export const removeCompilationStructuralCondition = (name: 'area' | 'price', id: string) => async (dispatch: (arg0: { type: string; }) => void, getState: () => { compilation: CompilationItemState }) => {
  const { compilation } = getState()
  const list = [...compilation.structuralCondition[name].filter(it => it.id !== id)]
  dispatch(setCompilationStructuralCondition({ name, list }))
}

export const editCompilationStructuralCondition = (name: 'area' | 'price', item: StructuralConditionItemTypes) => async (dispatch: (arg0: { type: string; }) => void, getState: () => { compilation: CompilationItemState }) => {
  const { compilation } = getState()
  const list = [...compilation.structuralCondition[name]]
  list.forEach(it => {
    if (it.id === item.id) {
      it.from = item.from
      it.to = item.to
      it.count = item.count
    }
  })
  dispatch(setCompilationStructuralCondition({ name, list }))
}

export const clearCompilationStructuralCondition = (name: 'area' | 'price') => async (dispatch: (arg0: { type: string; }) => void, getState: () => { compilation: CompilationItemState }) => {
  dispatch(setCompilationStructuralCondition({ name, list: [] }))
}

export const fetchCompilationItem = (currentCompilationId: string) => async (dispatch: (arg0: { type: string; }) => void, getState: () => { user: UserState }) => {
  const { user } = getState()

  if (user.current?.lastName && user.current?.firstName && currentCompilationId) {
    dispatch({ type: actionType.COMPILATION_GET_ITEM_START })
    try {
      const data = await CompilationsService.getItem({ id: currentCompilationId })
      dispatch({ type: actionType.COMPILATION_GET_ITEM_SUCCESS })
      dispatch(setCompilationsCurrent(data))
      dispatch(setCompilationList(data.analogs))
    } catch (err) {
      dispatch({ type: actionType.COMPILATION_GET_ITEM_FAIL })
    }
  }
}
