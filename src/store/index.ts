import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer } from '../reducers'

export const getStore = (): Store<any, AnyAction> => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(
    thunk
  )))
}
