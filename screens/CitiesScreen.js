import React,{Component} from 'react'
import {connect} from 'react-redux'
import {View, FlatList, ScrollView, StyleSheet} from 'react-native'
import {fetchWeatherFromCity} from '../actions'
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
      />
    );
  }

  _keyExtractor = (item, index) => {
    return item.id + ''
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
})

const styles = StyleSheet.create({
  container: {flex:1}
})

export default connect(mapStateToProps, bindActions)(CitiesScreen)