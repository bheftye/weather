import React,{Component} from 'react'
import {connect} from 'react-redux'
import {View, FlatList, ScrollView, StyleSheet} from 'react-native'
import {fetchWeatherFromCity, setCurrentCity} from '../actions'
import WeatherItem from '../components/WeatherItem'

class CitiesScreen extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
    title: 'Cities'
  })

  componentDidMount(){
    const {cities} = this.props
    cities.forEach((item) => {
      this.props.fetchWeatherFromCity(item.get('name'))
    })
  }

  _renderItem = ({item}) => {
    return (
      <WeatherItem
        item={item}
        onPress={this._onPress}
      />
    );
  }

  _keyExtractor = (item, index) => {
    return item.id + ''
  }

  _onPress = (item) => {
    this.props.setCurrentCity(item)
    this.props.navigation.navigate('Detail')
  }


  render () {
    const {citiesWeather} = this.props
    if (citiesWeather.length > 0){
      return (
          <ScrollView style={styles.container}>
            <FlatList
              data={citiesWeather}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
            />
          </ScrollView>
            )
    }
    return (<View />)
  }
}

const mapStateToProps = (state) => ({
  cities: state.get('app').get('cities'),
  citiesWeather: state.get('app').get('citiesWeather')
})

const bindActions = (dispatch) => ({
  fetchWeatherFromCity: (name) => {dispatch(fetchWeatherFromCity(name))},
  setCurrentCity: (city) => {dispatch(setCurrentCity(city))}
})

const styles = StyleSheet.create({
  container: {flex:1}
})

export default connect(mapStateToProps, bindActions)(CitiesScreen)