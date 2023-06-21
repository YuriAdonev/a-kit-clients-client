import { IState } from '../../reducers'
import { IUser } from './user.reducer'

export const getUserCurrent = ({ user }: IState): IUser | null => user.current
