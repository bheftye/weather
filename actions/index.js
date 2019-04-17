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
    const params = {
      q: name,
      APPID: constants.api.key
    }

    //prepare GET http request, we generate a Promise instead of using await.
    axios
      .get(constants.urls.weather, params)
      .then(({data: weather}) => {
        //I deconstruct the result -> data and rename to weather for better readability.
        //process the response from the API, verify the response is 200
        if (weather !== null && weather.code === 200){
          //Asynchronously send the returned weather information to reducer.
          dispatch(fetchWeatherSuccess(weather))
        }
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
 * @param weatherInfo
 * @returns {{type: string, payload: *}}
 */
function fetchWeatherSuccess (weatherInfo) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weatherInfo
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