import { View } from 'react-native'
import React, { Component } from 'react'
import AppStateExample from './Appstate'
import EasingApi from './easing'
import KeyboardApi from './keyboard'
import Panresponder from './PanResponder'

export default class RnApi extends Component {
  render() {
    return (
      <View>
          
          <AppStateExample/>
          <KeyboardApi/>
          <Panresponder/>
          <EasingApi/>
          
          
        
      </View>
    )
  }
}