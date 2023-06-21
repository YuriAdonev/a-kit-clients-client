import { IState } from '../../reducers'

export const getAnalogDescIsLoading = ({ analogDesc }: IState): boolean => analogDesc.isLoading
export const getAnalogDescShowModal = ({ analogDesc }: IState): boolean => analogDesc.showModal
export const getAnalogDescShowForm = ({ analogDesc }: IState): boolean => analogDesc.showForm
export const getAnalogDescCurrentForm = ({ analogDesc }: IState): string | null => analogDesc.currentForm
export const getAnalogDescText = ({ analogDesc }: IState): string => analogDesc.text
export const getAnalogDescForm = ({ analogDesc }: IState): any => analogDesc.form
