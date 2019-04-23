/**
 * Function that returns a recommendation based on the forecast.
 * @param forecast Array[Object] Contains the forecast of 5 days from a particular city.
 * @returns {string}
 */
export const recommendationAccordingToForecast = (forecast) => {
  let message = ""

  forecast.forEach( (item) => {
    if (item.weather[0].main === "Rain"){
      message = "Bring an umbrella! "
    }

    if (item.weather[0].main === "Snow"){
      message = "Bring a winter coat! "
    }

    if (item.weather[0].main === "Clear" && item.temp.min > 10){
      message = "Bring some sunscreen! "
    }

    if (item.weather[0].main === "Clear" && item.temp.min < 10){
      message = "Bring a jacket! "
    }
  })

  return message
}