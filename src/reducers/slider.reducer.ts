import { AnyAction } from 'redux'
import * as actionType from '../actions/types'

export interface SliderState {
  isActive: boolean
  imageList: string[]
  currentIndex: number
}

const initialState: SliderState = {
  isActive: false,
  imageList: [],
  currentIndex: 0
}

export const sliderReducer = (state = initialState, { type, payload }: AnyAction): SliderState => {
  switch (type) {
    case actionType.SLIDER_SET_IS_ACTIVE: {
      return { ...state, isActive: payload }
    }
    case actionType.SLIDER_SET_IMAGE_LIST: {
      return { ...state, imageList: payload }
    }
    case actionType.SLIDER_SET_CURRENT_INDEX: {
      return { ...state, currentIndex: payload }
    }
    default:
      return state
  }
}
