import { combineReducers } from 'redux'

import { appReducer as app, AppState } from '../features/app/app.reducer'
import { authReducer as auth, AuthState } from '../features/auth/auth.reducer'
import { userReducer as user, UserState } from '../features/user/user.reducer'
import { analogsReducer as analogs, AnalogsState } from '../features/analogs/analogs.reducer'
import { analogsFormReducer as analogsForm, AnalogsFormState } from '../features/analogs-form/analogs-form.reducer'
import { analogDescReducer as analogDesc, AnalogDescState } from '../features/analog-desc/analog-desc.reducer'
import { compilationsReducer as compilations, CompilationsState } from '../features/compilations/compilations.reducer'
import { compilationItemReducer as compilationItem, CompilationItemState } from '../features/compilation-item/compilation-item.reducer'

import { sliderReducer as slider, SliderState } from './slider.reducer'

export interface IState {
  app: AppState,
  auth: AuthState,
  user: UserState,
  compilations: CompilationsState,
  compilationItem: CompilationItemState,
  analogs: AnalogsState,
  analogsForm: AnalogsFormState,
  analogDesc: AnalogDescState,
  slider: SliderState
}

export const reducer = combineReducers({
  app,
  auth,
  user,
  compilations,
  compilationItem,
  analogs,
  analogsForm,
  analogDesc,
  slider
})
