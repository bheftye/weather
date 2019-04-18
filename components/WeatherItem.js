import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

class WeatherItem extends Component{
  render () {
    const {item} = this.props
    const tempCelcius = Math.round(item.main.temp - 273.15)
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.temp}>{tempCelcius}° </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {flex:1, flexDirection:'row', height:80, borderColor:'#aaaaaa',borderWidth: 0.5, alignItems:'center'},
  text: {flex:4,fontSize: 30, paddingLeft: 15},
  temp: {flex:1, fontSize: 30, textAlign: 'right', paddingRight:15}

});

export default WeatherItem