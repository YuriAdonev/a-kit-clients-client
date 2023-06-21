import { AnyAction } from 'redux'
import * as actionType from './analogs.types'
import { AnalogsService } from "../../services/analogs-service";
import { AnalogModel } from "../../models/analog-model";

export const setAnalogsIsLoading = (value: boolean): AnyAction => ({ type: actionType.ANALOGS_SET_IS_LOADING, payload: value })
export const setAnalogsErrorMessage = (value: boolean): AnyAction => ({ type: actionType.ANALOGS_SET_IS_LOADING, payload: value })
export const setAnalogsList = (value: AnalogModel[]): AnyAction => ({ type: actionType.ANALOGS_SET_LIST, payload: value })
export const setAnalogsCount = (value: number | null): AnyAction => ({ type: actionType.ANALOGS_SET_COUNT, payload: value })
export const addAnalogsToSelectedList = (value: string): AnyAction => ({ type: actionType.ANALOGS_ADD_TO_SELECTED_LIST, payload: value })
export const setAnalogsSelectedList = (value: string[]): AnyAction => ({ type: actionType.ANALOGS_SET_SELECTED_LIST, payload: value })
export const setAnalogsCurrentPage = (value: number): AnyAction => ({ type: actionType.ANALOGS_SET_CURRENT_PAGE, payload: value })

export const fetchAnalogsList = (currentPage: number) => async (dispatch: (arg0: { type: string; }) => void, getState: () => { analogsForm: any }) => {
  const { analogsForm } = getState()
  dispatch(setAnalogsIsLoading(true))
  dispatch({ type: actionType.ANALOGS_GET_LIST_START })
  AnalogsService.getList({ ...analogsForm, currentPage: currentPage})
    .then((list) => {
      dispatch({ type: actionType.ANALOGS_GET_LIST_SUCCESS })
      dispatch(setAnalogsCount(list.count))
      dispatch(setAnalogsList(list.items))
    })
    .catch((error) => {
      dispatch({ type: actionType.ANALOGS_GET_LIST_FAIL })
      dispatch(setAnalogsCount(null))
      dispatch(setAnalogsList([]))
    })
    .finally(() => {
      dispatch(setAnalogsIsLoading(false))
    })
}
