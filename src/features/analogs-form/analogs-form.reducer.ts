import { AnyAction } from 'redux'
import * as actionType from './analogs-form.types'

export interface AnalogsFormState {
  type: string
  category: string
  purpose: string
  region: string
  city: string | null
  showExtendedForm: boolean
  searchInTitle: string
  searchInDescription: string
  searchInAddress: string
  squareInterval: {
    from: string
    to: string
  }
  priceInterval: {
    from: string
    to: string
  }
}

const initialState: AnalogsFormState = {
  type: 'Продажа',
  category: 'Коммерческая недвижимость',
  purpose: 'Офис',
  region: 'Омская область',
  city: 'Омск',
  showExtendedForm: false,
  searchInTitle: '',
  searchInDescription: '',
  searchInAddress: '',
  squareInterval: {
    from: '',
    to: ''
  },
  priceInterval: {
    from: '',
    to: ''
  }
}

export const analogsFormReducer = (state = initialState, { type, payload }: AnyAction): AnalogsFormState => {
  switch (type) {
    case actionType.ANALOGS_FORM_SET_TYPE: {
      return { ...state, type: payload }
    }
    case actionType.ANALOGS_FORM_SET_CATEGORY: {
      return { ...state, category: payload }
    }
    case actionType.ANALOGS_FORM_SET_PURPOSE: {
      return { ...state, purpose: payload }
    }
    case actionType.ANALOGS_FORM_SET_REGION: {
      return { ...state, region: payload }
    }
    case actionType.ANALOGS_FORM_SET_CITY: {
      return { ...state, city: payload === '' ? null : payload }
    }
    case actionType.ANALOGS_FORM_SET_SEARCH_IN_TITLE: {
      return { ...state, searchInTitle: payload }
    }
    case actionType.ANALOGS_FORM_SET_SEARCH_IN_DESCRIPTION: {
      return { ...state, searchInDescription: payload }
    }
    case actionType.ANALOGS_FORM_SET_SEARCH_IN_ADDRESS: {
      return { ...state, searchInAddress: payload }
    }
    case actionType.ANALOGS_FORM_SET_SQUARE_INTERVAL: {
      return { ...state, squareInterval: payload }
    }
    case actionType.ANALOGS_FORM_SET_PRICE_INTERVAL: {
      return { ...state, priceInterval: payload }
    }
    case actionType.ANALOGS_FORM_SET_SHOW_EXTENDED_FORM: {
      return { ...state, showExtendedForm: payload }
    }
    default:
      return state
  }
}
