import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Text, ScrollView, FlatList, Image } from 'react-native'
import Map from '../components/Map'
import { fetchFutureForecast } from '../actions'
import { recommendationAccordingToForecast } from '../helpers/helpers'

class DetailScreen extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
    title: 'Weather Forecast'
  })

  componentDidMount () {
    const {currentCity: city} = this.props
    this.props.fetchFutureForecast(city.id)
  }

  componentWillReceiveProps (newProps) {
    const {currentCity: city} = this.props
    const {currentCity: newCity} = newProps

    if (city.id !== newCity.id) {
      this.props.fetchFutureForecast(newCity.id)
    }
  }

  _renderItem = ({item, index}) => {
    const iconUri = 'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'
    let date = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    date.setTime(item.dt * 1000) // javascript timestamps are in milliseconds
    return (
      <View style={styles.row}>
        <Text style={styles.textList}>
          {(index === 0) ? 'Today' : days[date.getDay()]}
        </Text>
        <Image style={{height: 45, width: 45}} source={{uri: iconUri}}/>
        <Text style={styles.temp}>{Math.round(item.temp.max)}  {Math.round(item.temp.min)}</Text>
      </View>
    )
  }

  _keyExtractor = (item, index) => {
    return item.dt + ''
  }

  render () {
    const {currentCity: city, futureForecast: forecast} = this.props
    if (city !== null) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.nameCont}>
            <Text style={styles.text}>{city.name}</Text>
            <Text style={styles.description}>{city.weather[0].description}</Text>
            <Text style={styles.text}>{Math.round(city.main.temp)}°</Text>
          </View>
          <View style={styles.list}>
            <FlatList
              data={forecast}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
            />
          </View>
          <View>
            <Text style={styles.extra}>
              Humidity
            </Text>
            <Text style={styles.valueEx}>
              {city.main.humidity}%
            </Text>
          </View>
          <View>
            <Text style={styles.longText}>
              Today: {Math.round(city.main.temp)}° with {city.weather[0].description} right now. The maximum temperature
              will be {Math.round(city.main.temp_max)}°.
              The minimum temperature will be {Math.round(city.main.temp_min)}°.
            </Text>
            <Text style={styles.recommendation}>
              Recommendation: {recommendationAccordingToForecast(forecast)}
            </Text>
          </View>
          <View style={styles.mapCont}>
            <Map longitude={city.coord.lon} latitude={city.coord.lat} zoom={true}/>
          </View>
        </ScrollView>
      )
    }

    return (
      <View style={styles.container}>
        <Text>Loading Weather</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  currentCity: state.get('app').get('currentCity'),
  futureForecast: state.get('app').get('futureForecast')
})

const bindActions = (dispatch) => ({
  fetchFutureForecast: (cityId) => dispatch(fetchFutureForecast(cityId))
})

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#36C3FF'},
  nameCont: {alignItems: 'center', justifyContent: 'center', height: 150, color: '#ffffff'},
  mapCont: {height: 300},
  text: {textAlign: 'center', fontSize: 40, color: '#ffffff'},
  description: {textAlign: 'center', fontSize: 18, color: '#ffffff'},
  longText: {padding: 15, fontSize: 16, color: '#ffffff'},
  extra: {fontSize: 18, paddingLeft: 15, color: '#ffffff'},
  valueEx: {fontSize: 22, paddingLeft: 15, color: '#ffffff'},
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ffffff'
  },
  textList: {flex: 2, fontSize: 18, color: '#ffffff'},
  temp: {flex: 1, fontSize: 18, fontWeight: '500', textAlign: 'right', color: '#ffffff'},
  list: {paddingLeft: 15, paddingRight: 15, paddingBottom: 10},
  forecast: {flex: 1, height: 200},
  recommendation: {paddingLeft: 15, paddingBottom: 15, color: '#ffffff',fontSize: 18}
})

export default connect(mapStateToProps, bindActions)(DetailScreen)