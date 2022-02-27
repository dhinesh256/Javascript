import { View, Text  } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Grid from './Grid'
import DeepLinkStack from '../Deeplinking/App'
// import ReduxSagaTesting from '../ReduxSagaTesting/ReduxSagaTesting'
import linking from '../Deeplinking/linking'
import HomeScreen from '../ReduxSagaTesting/screens/HomeScreen'


const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer
      linking={linking}
    >

    <Stack.Navigator>
      <Stack.Screen name="Home" component={Grid} />
      <Stack.Screen name="DeepLink" component={DeepLinkStack} />
      <Stack.Screen name="SagaTesting" component={HomeScreen} />
      {/*<Stack.Screen name="LinkingScreen" component={LinkingScreen} /> */}
    </Stack.Navigator>


    </NavigationContainer>
  );
}
  
