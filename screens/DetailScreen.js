import React,{Component} from 'react'
import {View} from 'react-native'

class DetailScreen extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
    title : 'City'
  })

  render () {
    return (<View />)
  }
}

export default DetailScreen