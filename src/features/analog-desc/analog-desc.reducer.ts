import { AnyAction } from 'redux'
import * as actionType from './analog-desc.types'

export interface AnalogDescState {
  isLoading: boolean
  errorMessage: string,
  showForm: boolean,
  id: string,
  currentForm: string | null,
  text: string,
  showModal: boolean,
  form: {
    stead: {
      availability: boolean | null
      area: number | null
      ownership: 'own' | 'rent' | null
    }
    structureOfPremises: {
      warm: number | null
      cold: number | null
      officeOrTrade: number | null
    }
    areaDistribution: {
      basement: number | null
      groundFloor: number | null
      firstFloor: number | null
      secondFloorAndAbove: number | null
    }
    communications: {
      heating: 'central' | 'autonomous' | 'missing' | null
      sewerage: 'central' | 'autonomous' | 'missing' | null
      electricitySupply: boolean | null
      waterSupply: boolean | null
    }
    cadastralNumber: {
      current: string | null
      suitable: string[] | null
    }
  }
}

const initialState: AnalogDescState = {
  isLoading: true,
  errorMessage: '',
  showForm: false,
  id: '',
  currentForm: null,
  text: '',
  showModal: false,
  form: {
    stead: {
      availability: null,
      area: null,
      ownership: null,
    },
    structureOfPremises: {
      warm: null,
      cold: null,
      officeOrTrade: null,
    },
    areaDistribution: {
      basement: null,
      groundFloor: null,
      firstFloor: null,
      secondFloorAndAbove: null,
    },
    communications: {
      heating: null,
      sewerage: null,
      electricitySupply: null,
      waterSupply: null
    },
    cadastralNumber: {
      current: null,
      suitable: null
    }
  }
}

export const analogDescReducer = (state = initialState, { type, payload }: AnyAction): AnalogDescState => {
  switch (type) {
    case actionType.ANALOG_DESC_SET_ID: {
      return { ...state, id: payload }
    }
    case actionType.ANALOG_DESC_SET_IS_LOADING: {
      return { ...state, isLoading: payload }
    }
    case actionType.ANALOG_DESC_SET_SHOW_FORM: {
      return { ...state, showForm: payload }
    }
    case actionType.ANALOG_DESC_SET_CURRENT_FORM: {
      return { ...state, currentForm: payload }
    }
    case actionType.ANALOG_DESC_SET_SHOW_MODAL: {
      return { ...state, showModal: payload }
    }
    case actionType.ANALOG_DESC_SET_TEXT: {
      return { ...state, text: payload }
    }
    case actionType.ANALOG_DESC_SET_FORM: {
      if (!payload) {
        return { ...state, form: initialState.form }
      }
      return { ...state, form: payload }
    }
    case actionType.ANALOG_DESC_RESET: {
      return { ...state, form: initialState.form }
    }
    case actionType.ANALOG_DESC_SET_FORM_STEAD: {
      return { ...state, form: { ...state.form, stead: payload} }
    }
    case actionType.ANALOG_DESC_SET_FORM_STRUCTURE_OF_PREMISES: {
      return { ...state, form: { ...state.form, structureOfPremises: payload} }
    }
    case actionType.ANALOG_DESC_SET_FORM_AREA_DISTRIBUTION: {
      return { ...state, form: { ...state.form, areaDistribution: payload} }
    }
    case actionType.ANALOG_DESC_SET_FORM_COMMUNICATIONS: {
      return { ...state, form: { ...state.form, communications: payload} }
    }
    case actionType.ANALOG_DESC_SET_FORM_CADASTRAL_NUMBER: {
      return { ...state, form: { ...state.form, cadastralNumber: payload} }
    }
    default:
      return state
  }
}
