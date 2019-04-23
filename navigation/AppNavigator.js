import { createAppContainer, createStackNavigator } from 'react-navigation'
import CitiesScreen from '../screens/CitiesScreen'
import DetailScreen from '../screens/DetailScreen'

/**
 * Screens that exist in the App.
 */
export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Cities: {screen: CitiesScreen},
  Detail: { screen: DetailScreen },
}));