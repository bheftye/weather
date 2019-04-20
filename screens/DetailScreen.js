import React,{Component} from 'react'
import {connect} from 'react-redux'
import {View, StyleSheet, Text,ScrollView} from 'react-native'
import Map from '../components/Map'

class DetailScreen extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
    title : 'Weather Forecast'
  })

  render () {
    const {currentCity:city} = this.props
    if (city !== null){
      return (
        <ScrollView style={styles.container}>
          <View style={styles.nameCont}>
            <Text style={styles.text}>{city.name}</Text>
            <Text style={styles.text}>{Math.round(city.main.temp)}°</Text>
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
              Today: {Math.round(city.main.temp)}° with {city.weather[0].description} right now. The maximum temperature will be {Math.round(city.main.temp_max)}°.
              The minimum temperature will be {Math.round(city.main.temp_min)}°.
            </Text>
          </View>
          <View style={styles.mapCont}>
            <Map longitude={city.coord.lon} latitude={city.coord.lat} zoom={true} />
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
  currentCity: state.get('app').get('currentCity')
})

const styles = StyleSheet.create({
  container: {flex:1},
  nameCont: {alignItems:'center', justifyContent:'center', height: 150},
  mapCont: {height:300},
  text: {textAlign:'center', fontSize: 30},
  longText: {padding:15, fontSize:16},
  extra: {fontSize:18, paddingLeft:15},
  valueEx: {fontSize: 22, paddingLeft:15}
})

export default connect(mapStateToProps)(DetailScreen)