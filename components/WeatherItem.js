import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native'
import Map from './Map'

class WeatherItem extends Component{
  render () {
    const {item} = this.props
    const iconUri = 'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'
    return (
      <View styles={{flex:1}}>
        <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(item)}>
          <Text style={styles.text}>{item.name}</Text>
          <Image style={styles.img} source={{uri:iconUri}} />
          <Text style={styles.temp}>{Math.round(item.main.temp)}°</Text>
        </TouchableOpacity>
        <View style={styles.mapCont}>
          <Map longitude={item.coord.lon} latitude={item.coord.lat} />
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {flex:1, flexDirection:'row', height:80, alignItems:'center'},
  text: {flex:4,fontSize: 30, paddingLeft: 15, color:'#ffffff'},
  temp: {flex:1, fontSize: 30, textAlign: 'right', color:'#ffffff', paddingRight:15},
  mapCont: {flex:1, height:150, borderBottomColor:'#aaaaaa',borderBottomWidth: 1},
  img: {flex:1,height:40, width:40}
});

export default WeatherItem