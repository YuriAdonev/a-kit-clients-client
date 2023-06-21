import { AnyAction } from 'redux'
import * as actionType from './analogs-form.types'

export const setAnalogsFormType = (value: string): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_TYPE, payload: value })
export const setAnalogsFormCategory = (value: string): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_CATEGORY, payload: value })
export const setAnalogsFormPurpose = (value: string): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_PURPOSE, payload: value })
export const setAnalogsFormRegion = (value: string): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_REGION, payload: value })
export const setAnalogsFormCity = (value: string): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_CITY, payload: value })
export const setAnalogsFormSearchInTitle = (value: string): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_SEARCH_IN_TITLE, payload: value })
export const setAnalogsFormSearchInDescriptions = (value: string): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_SEARCH_IN_DESCRIPTION, payload: value })
export const setAnalogsFormSearchInAddress = (value: string): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_SEARCH_IN_ADDRESS, payload: value })
export const setAnalogsFormSquareInterval = (value: { from: string, to: string }): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_SQUARE_INTERVAL, payload: value })
export const setAnalogsFormPriceInterval = (value: { from: string, to: string }): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_PRICE_INTERVAL, payload: value })
export const setAnalogsFormShowExtendedForm = (value: boolean): AnyAction => ({ type: actionType.ANALOGS_FORM_SET_SHOW_EXTENDED_FORM, payload: value })
