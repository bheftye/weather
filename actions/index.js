import axios from 'axios'
import constants from '../constants/index'

/**
 * Action names that determine what will the reducer should execute.
 * Three possible states (loading, success, error) thus
 * @type {string}
 */
export const FETCH_WEATHER_SUCCESS = 'fetch_weather_success'
export const FETCH_WEATHER_LOADING = 'fetch_weather_loading'
export const FETCH_WEATHER_ERROR = 'fetch_weather_error'
export const SET_CURRENT_CITY = 'set_current_city'

/**
 * Retrieves the weather information from API.
 * @param name string Name of the city.
 * @returns {Function}
 */
export const fetchWeatherFromCity = (name) => {
  return (dispatch) => {

    //asynchronously set the loading state.
    dispatch(fetchWeatherLoading())

    /**
     * GET Parameters required according to documentation.
     * @param q string <city_name>,<country_code> Example: "Stockholm,se"
     * @param APPID string API key.
     */
    const params = '?q=' + name + '&' + 'APPID=' + constants.api.key

    //prepare GET http request, we generate a Promise instead of using await.
    axios
      .get(constants.urls.weather + params)
      .then(({data: weather}) => {
        //I deconstruct the result -> data and rename to weather for better readability.
        //process the response from the API, verify the response is 200
        if (weather !== null && weather.cod === 200){
          //Asynchronously send the returned weather information to reducer.
          dispatch(fetchWeatherSuccess(weather))
        } else dispatch(fetchWeatherError(new Error('Failed to retrieve')))
      })
      .catch((error) => {
        //We show the error in console for rapid evaluation.
        console.log(error)
        //Asynchronously send the error to state.
        dispatch(fetchWeatherError(error))
      })
  }
}

/**
 * Set the state that we are loading the weather of a certain city.
 * @returns {{type: string}}
 */
function fetchWeatherLoading (){
  return {
    type: FETCH_WEATHER_LOADING,
  }
}

/**
 * Return the information returned by the http request to the weather API if successful.
 * @param weather Object returned by API
 * @returns {{type: string, payload: Object}}
 */
function fetchWeatherSuccess (weather) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weather
  }
}

/**
 * Return the details of the error returned by the http request to give feedback to user.
 * As well consider logging the error for maintenance.
 * @param error
 * @returns {{type: string, payload: *}}
 */
function fetchWeatherError (error){
  return {
    type: FETCH_WEATHER_ERROR,
    payload: error
  }
}

/**
 * Sets the current function
 * @param city Weather object corresponding to the city the user pressed on.
 * @returns {{type: string, payload: *}}
 */
export const setCurrentCity = (city) => {
  return {
    type: SET_CURRENT_CITY,
    payload: city
  }
}