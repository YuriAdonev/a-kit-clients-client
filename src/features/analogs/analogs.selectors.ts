import { IState } from '../../reducers'
import { AnalogModel } from "../../models/analog-model";

export const getAnalogsIsLoading = ({ analogs }: IState): boolean => analogs.isLoading
export const getAnalogsErrorMessage = ({ analogs }: IState): string => analogs.errorMessage
export const getAnalogsList = ({ analogs }: IState): AnalogModel[] => analogs.list
export const getAnalogsCount = ({ analogs }: IState): number | null => analogs.count
export const getAnalogsCurrentPage = ({ analogs }: IState): number => analogs.currentPage
export const getAnalogsSelectedList = ({ analogs }: IState): string[] => analogs.selectedList
