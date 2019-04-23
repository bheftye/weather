import {combineReducers} from 'redux-immutable'
import App from './app/index'

/**
 * Global state construction.
 */
export default combineReducers({
  app: App
})