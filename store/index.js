import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'

/**
 * Store configuration for Redux and global state.
 * @param initialState
 * @returns {Store<any, Action> & {dispatch: any}}
 */
export default function configureStore(initialState) {
  const middlewares = [
    thunk,
  ]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools

  return createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  )
}