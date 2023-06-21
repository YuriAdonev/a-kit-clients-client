import { AnyAction } from 'redux'
import * as actionType from './types'

export const setSliderIsActive = (value: boolean): AnyAction => ({ type: actionType.SLIDER_SET_IS_ACTIVE, payload: value })
export const setSliderImageList = (value: string[]): AnyAction => ({ type: actionType.SLIDER_SET_IMAGE_LIST, payload: value })
export const setSliderCurrentIndex = (value: number): AnyAction => ({ type: actionType.SLIDER_SET_CURRENT_INDEX, payload: value })

export const showSlider = (imageList: string[]) => async (dispatch: (arg0: { type: string; }) => void) => {
  dispatch(setSliderImageList(imageList))
  dispatch(setSliderIsActive(true))
}

export const hideSlider = () => async (dispatch: (arg0: { type: string; }) => void) => {
  dispatch(setSliderIsActive(false))
  dispatch(setSliderCurrentIndex(0))
  dispatch(setSliderImageList([]))
}
