import React from 'react';
import AppNavigator from './navigation/AppNavigator'
import {Provider} from 'react-redux'
import configureStore from './store/index'

/**
 * This is the highest level component.
 */
export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppNavigator/>
      </Provider>
    )
  }
}
