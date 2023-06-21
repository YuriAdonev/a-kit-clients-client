import { AnyAction } from 'redux'
import * as actionType from './compilation-item.types'
import { AnalogModel } from '../../models/analog-model'
import {
  CompilationCalculatedIndicatorsTypes,
  getCompilationCalculatedIndicators
} from "../../helpers/get-compilation-calculated-indicators";

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

export type CompilationItemTypes = {
  id: string
  title: string
  createdBy: string
  createdDate: number
}

export interface CompilationItemState {
  list: AnalogModel[]
  calculatedIndicators: CompilationCalculatedIndicatorsTypes
  structuralCondition: StructuralConditionTypes
}

const initialState: CompilationItemState = {
  list: [],
  calculatedIndicators: {
    announcementsCount: 0,
    totalArea: 0,
    totalPrice: 0,
    weightedAveragePrice: 0,
    averagePrice: 0,
    averageArea: 0,
    largestArea: {
      value: 0,
      address: ''
    },
    highestPrice: {
      value: 0,
      address: ''
    },
    smallestArea: {
      value: 0,
      address: ''
    },
    lowestPrice: {
      value: 0,
      address: ''
    }
  },
  structuralCondition: {
    area: [],
    price: []
  }
}

export const compilationItemReducer = (state = initialState, { type, payload }: AnyAction): CompilationItemState => {
  switch (type) {
    case actionType.COMPILATION_SET_LIST: {
      const calculatedIndicators = getCompilationCalculatedIndicators(payload)
      return { ...state, calculatedIndicators, list: payload }
    }
    // case actionType.COMPILATION_ADD_ITEMS_TO_LIST: {
    //   const list = []
    //   for (const item of payload) {
    //     const existItem = state.list.find(it => it.id === item.id)
    //     if (!existItem) {
    //       list.push(item)
    //     }
    //   }
    //   console.log('action 1', list)
    //   const calculatedIndicators = getCompilationCalculatedIndicators([...state.list, ...list])
    //   return { ...state, calculatedIndicators, list: [...state.list, ...list] }
    // }
    // case actionType.COMPILATION_REMOVE_ITEMS_FROM_LIST: {
    //   let list = [...state.list]
    //   for (const item of payload) {
    //     list = [...list.filter(it => it.id !== item.id)]
    //   }
    //   const calculatedIndicators = getCompilationCalculatedIndicators([...list])
    //   return { ...state, calculatedIndicators, list: [...list] }
    // }
    // case actionType.COMPILATION_SET_STRUCTURAL_CONDITION: {
    //   return { ...state, structuralCondition: {...state.structuralCondition, [payload.name]: payload.list} }
    // }
    default:
      return state
  }
}
