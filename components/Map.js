import React, { Component } from 'react'
import { MapView } from 'expo'
import { View, Text } from 'react-native'

class Map extends Component {
  render () {
    const {latitude, longitude} = this.props
    if (latitude && longitude) {
      return (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
          }}
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