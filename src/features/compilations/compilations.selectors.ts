import { IState } from '../../reducers'
import {CompilationItemTypes} from "../compilation-item/compilation-item.reducer";

export const getCompilationsModalCreateIsOpen = ({ compilations }: IState): boolean => compilations.modalCreateIsOpen
export const getCompilationsModalAddAnalogsIsOpen = ({ compilations }: IState): boolean => compilations.modalAddAnalogsIsOpen
export const getCompilationsList = ({ compilations }: IState): CompilationItemTypes[] => compilations.list
export const getCompilationsCurrent = ({ compilations }: IState): any | null => compilations.current
