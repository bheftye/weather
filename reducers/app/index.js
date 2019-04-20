import Immutable from 'immutable'
import {
  FETCH_WEATHER_LOADING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR,
  SET_CURRENT_CITY}
  from '../../actions/index'

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
      return state.set('currentCity', action.payload)
    default:
      return state
  }
}
