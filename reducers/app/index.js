import Immutable from 'immutable'
import {
  FETCH_WEATHER_LOADING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR,
  SET_CURRENT_CITY,
  FETCH_FUTURE_FORECAST_LOADING, FETCH_FUTURE_FORECAST_SUCCESS, FETCH_FUTURE_FORECAST_ERROR
}
  from '../../actions/index'

/**
 * @property loading boolean Refers to app loading
 * @property fetching boolean Fetching current information for the three cities
 * @property cities Array[Object] List of cities by default.
 * @property citiesWeather Array[Object] List of current weathers according to cities list
 * @property currentCity Object The current city obtained from citiesWeather that is being displayed in Detail screen
 * @property futureForecast Array[Object] The list of forecast for the current city being displayed in Detail screen
 * @property error Object The last error in any of the requests.
 */
const initialState = Immutable.fromJS({
  loading: false,
  fetching: false,
  cities:[
    {name: "Stockholm,se"},
    {name: "Bengaluru,in"},
    {name: "Nairobi,ke"}
  ],
  citiesWeather: [],
  currentCity: null,
  futureForecast: [],
  error: {}
})

export default (state = initialState, action) => {
  switch (action.type){
    case FETCH_WEATHER_LOADING:
      //Update the state fetching so we can give feedback to user.
      return state.set('fetching', true)

    case FETCH_WEATHER_SUCCESS:
      //Update the array containing the weather information, we are no longer fetching.
      return state
        .set('citiesWeather', [...state.get('citiesWeather'), action.payload])
        .set('fetching', false)

    case FETCH_WEATHER_ERROR:
      //Update the error object to feedback the user about the error, we are no longer fetching.
      return state
        .set('error', action.payload)
        .set('fetching', false)

    case SET_CURRENT_CITY:
      //On user press update the current city that should be displayed in Detail Screen.
      return state.set('currentCity', action.payload)

    case FETCH_FUTURE_FORECAST_LOADING:
      //Update the state fetching so we can give feedback to user.
      return state.set('fetching', true)

    case FETCH_FUTURE_FORECAST_SUCCESS:
      //Update the array containing the forecast information for current city, we are no longer fetching.
      return state
        .set('futureForecast', action.payload)
        .set('fetching', false)

    case FETCH_FUTURE_FORECAST_ERROR:
      //Update the error object to feedback the user about the error, we are no longer fetching.
      return state
        .set('error', action.payload)
        .set('fetching', false)

    default:
      return state
  }
}
