import { IState } from '../../reducers'

export const getAuthIsLoggedIn = ({ auth }: IState): boolean => auth.isLoggedIn
export const getAuthIsLoading = ({ auth }: IState): boolean => auth.isLoading
export const getAuthErrorMsg = ({ auth }: IState): string => auth.errorMsg
