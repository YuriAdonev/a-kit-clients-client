import { AnyAction } from 'redux'
import * as actionType from './analogs.types'
import { AnalogModel } from '../../models/analog-model'

export interface AnalogsState {
  isLoading: boolean
  errorMessage: string,
  list: AnalogModel[],
  count: number | null,
  selectedList: string[],
  hideCompilation: boolean,
  currentPage: number
}

const initialState: AnalogsState = {
  isLoading: false,
  errorMessage: '',
  list: [],
  count: null,
  selectedList: [],
  hideCompilation: false,
  currentPage: 1
}

export const analogsReducer = (state = initialState, { type, payload }: AnyAction): AnalogsState => {
  switch (type) {
    case actionType.ANALOGS_SET_IS_LOADING: {
      return { ...state, isLoading: payload }
    }
    case actionType.ANALOGS_SET_ERROR_MESSAGE: {
      return { ...state, errorMessage: payload }
    }
    case actionType.ANALOGS_SET_LIST: {
      return { ...state, list: payload }
    }
    case actionType.ANALOGS_SET_COUNT: {
      return { ...state, count: payload }
    }
    case actionType.ANALOGS_SET_CURRENT_PAGE: {
      return { ...state, currentPage: payload }
    }
    case actionType.ANALOGS_ADD_TO_SELECTED_LIST: {
      if (!state.selectedList.includes(payload)) {
        return { ...state, selectedList: [...state.selectedList, payload] }
      }
      if (state.selectedList.includes(payload)) {
        const newSelectedList = [...state.selectedList].filter(item => item !== payload)
        return { ...state, selectedList: newSelectedList }
      }
      return { ...state, selectedList: [...state.selectedList] }
    }
    case actionType.ANALOGS_SET_SELECTED_LIST: {
      return { ...state, selectedList: payload }
    }
    default:
      return state
  }
}
