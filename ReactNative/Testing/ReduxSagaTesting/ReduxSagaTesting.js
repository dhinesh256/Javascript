import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { Provider } from 'react-redux'
import store from './store'

export default function ReduxSagaTesting() {
  return (
    
        <Provider store={store}>
               <HomeScreen/>
        </Provider>
    
  )
}