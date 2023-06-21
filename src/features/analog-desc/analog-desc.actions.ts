import { AnyAction } from 'redux'
import * as actionType from './analog-desc.types'
import { AnalogsService } from "../../services/analogs-service";

export const resetAnalogDesc = (): AnyAction => ({ type: actionType.ANALOG_DESC_RESET })
export const setAnalogDescId = (value: string): AnyAction => ({ type: actionType.ANALOG_DESC_SET_ID, payload: value })
export const setAnalogDescIsLoading = (value: boolean): AnyAction => ({ type: actionType.ANALOG_DESC_SET_IS_LOADING, payload: value })
export const setAnalogDescShowModal = (value: boolean): AnyAction => ({ type: actionType.ANALOG_DESC_SET_SHOW_MODAL, payload: value })
export const setAnalogDescShowForm = (value: boolean): AnyAction => ({ type: actionType.ANALOG_DESC_SET_SHOW_FORM, payload: value })
export const setAnalogDescCurrentForm = (value: string): AnyAction => ({ type: actionType.ANALOG_DESC_SET_CURRENT_FORM, payload: value })
export const setAnalogDescText = (value: string): AnyAction => ({ type: actionType.ANALOG_DESC_SET_TEXT, payload: value })
export const setAnalogDescForm = (value: any): AnyAction => ({ type: actionType.ANALOG_DESC_SET_FORM, payload: value })
export const setAnalogDescFormStead = (value: any): AnyAction => ({ type: actionType.ANALOG_DESC_SET_FORM_STEAD, payload: value })
export const setAnalogDescFormStructureOfPremises = (value: any): AnyAction => ({ type: actionType.ANALOG_DESC_SET_FORM_STRUCTURE_OF_PREMISES, payload: value })
export const setAnalogDescFormAreaDistribution = (value: any): AnyAction => ({ type: actionType.ANALOG_DESC_SET_FORM_AREA_DISTRIBUTION, payload: value })
export const setAnalogDescFormCommunications = (value: any): AnyAction => ({ type: actionType.ANALOG_DESC_SET_FORM_COMMUNICATIONS, payload: value })
export const setAnalogDescFormCadastralNumber = (value: any): AnyAction => ({ type: actionType.ANALOG_DESC_SET_FORM_CADASTRAL_NUMBER, payload: value })

export const fetchAnalogDesc = (id: string) => async (dispatch: (arg0: { type: string; }) => void) => {
  dispatch(setAnalogDescIsLoading(true))
  dispatch(setAnalogDescShowModal(true))
  dispatch(setAnalogDescId(id))
  dispatch({ type: actionType.ANALOG_DESC_GET_DESC_START })
  AnalogsService.getDescription({ id })
    .then((response) => {
      dispatch({ type: actionType.ANALOG_DESC_GET_DESC_SUCCESS })
      dispatch(setAnalogDescText(response.description))
      if (response.extendedInfo) {
        const { stead, structureOfPremises, areaDistribution, communications, cadastralNumber } = response.extendedInfo
        dispatch(setAnalogDescForm({
          stead,
          structureOfPremises,
          areaDistribution,
          communications,
          cadastralNumber
        }))
      } else {
        dispatch(resetAnalogDesc())
      }
    })
    .catch((error) => {
      dispatch({ type: actionType.ANALOG_DESC_GET_DESC_FAIL })
      dispatch(setAnalogDescText('Описание не найдено'))
      // dispatch(setAnalogDescFieldList([]))
    })
    .finally(() => {
      dispatch(setAnalogDescIsLoading(false))
    })
}

export const saveAnalogDescForm = (form: any) => async (dispatch: (arg0: { type: string; }) => void, getState: () => { analogDesc: any; }) => {
  const { analogDesc } = getState()
  dispatch(setAnalogDescIsLoading(true))
  dispatch({ type: actionType.ANALOG_DESC_SAVE_FORM_START })
  const fullForm = { ...analogDesc.form, ...form }
  const body = {
    id: analogDesc.id,
    ...fullForm
  }
  AnalogsService.saveExtendedInfo(body)
    .then((response) => {
      dispatch({ type: actionType.ANALOG_DESC_SAVE_FORM_SUCCESS })
      const { stead, structureOfPremises, areaDistribution, communications, cadastralNumber } = response.extendedInfo
      dispatch(setAnalogDescForm({
        stead,
        structureOfPremises,
        areaDistribution,
        communications,
        cadastralNumber
      }))
    })
    .catch((error) => {
      dispatch({ type: actionType.ANALOG_DESC_SAVE_FORM_FAIL })
      // dispatch(setAnalogDescText('Описание не найдено'))
      // dispatch(setAnalogDescFieldList([]))
    })
    .finally(() => {
      dispatch(setAnalogDescShowForm(false))
      dispatch(setAnalogDescIsLoading(false))
    })
}
