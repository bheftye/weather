import React, { Component } from 'react'
import { MapView } from 'expo'
import { View, Text } from 'react-native'

class Map extends Component {
  render () {
    const {latitude, longitude, zoom} = this.props
    if (latitude && longitude) {
      let props = {}
      if (!zoom)
        props = {
        zoomEnabled: false,
        zoomTapEnabled: false,
        zoomControlEnabled: false,
        scrollEnabled: false,
      }
      return (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          {...props}
        />)
    }
    return (
      <View>
        <Text>Map not available.</Text>
      </View>
    )
  }
}

export default Map