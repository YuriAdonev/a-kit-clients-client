import { IState } from '../../reducers'

export const getIsAppLoading = ({ app }: IState): boolean => app.appIsLoading
