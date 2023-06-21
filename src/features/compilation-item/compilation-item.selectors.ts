import { IState } from '../../reducers'
import { AnalogModel } from "../../models/analog-model";
import {CompilationCalculatedIndicatorsTypes} from "../../helpers/get-compilation-calculated-indicators";
import {StructuralConditionTypes} from "./compilation-item.reducer";

export const getCompilationItemList = ({ compilationItem }: IState): AnalogModel[] => compilationItem.list
export const getCompilationItemCalculatedIndicators = ({ compilationItem }: IState): CompilationCalculatedIndicatorsTypes => compilationItem.calculatedIndicators
export const getCompilationItemStructuralCondition = ({ compilationItem }: IState): StructuralConditionTypes => compilationItem.structuralCondition
