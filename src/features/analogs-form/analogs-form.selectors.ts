import { IState } from '../../reducers'
import { AnalogsFormState } from "./analogs-form.reducer";

export const getAnalogsForm = ({ analogsForm }: IState): AnalogsFormState => analogsForm
