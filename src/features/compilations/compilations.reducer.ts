import { AnyAction } from 'redux'
import * as actionType from './compilations.types'
import {CompilationItemTypes} from "../compilation-item/compilation-item.reducer";

export type StructuralConditionItemTypes = {
  id: string
  from: number
  to: number
  count: number
}
export type StructuralConditionTypes = {
  area: StructuralConditionItemTypes[]
  price: StructuralConditionItemTypes[]
}

export interface CompilationsState {
  current: any | null,
  modalAddAnalogsIsOpen: boolean,
  modalCreateIsOpen: boolean,
  list: CompilationItemTypes[],
  count: number | null
}

const initialState: CompilationsState = {
  current: null,
  modalAddAnalogsIsOpen: false,
  modalCreateIsOpen: false,
  list: [],
  count: null
}

export const compilationsReducer = (state = initialState, { type, payload }: AnyAction): CompilationsState => {
  switch (type) {
    case actionType.COMPILATIONS_SET_MODAL_CREATE_IS_OPEN: {
      return { ...state, modalCreateIsOpen: payload }
    }
    case actionType.COMPILATIONS_SET_MODAL_ADD_ANALOGS_IS_OPEN: {
      return { ...state, modalAddAnalogsIsOpen: payload }
    }
    case actionType.COMPILATIONS_SET_LIST: {
      return { ...state, list: payload }
    }
    case actionType.COMPILATIONS_SET_COUNT: {
      return { ...state, count: payload }
    }
    case actionType.COMPILATIONS_SET_CURRENT: {
      return { ...state, current: payload }
    }
    default:
      return state
  }
}
