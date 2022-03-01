import { View, Text  } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Grid from './Grid'
import DeepLinkStack from '../Deeplinking/App'
import GridLinking from './GridLinking'
import ReduxSagaTesting from '../ReduxSagaTesting/ReduxSagaTesting'
import ReduxTesting from '../ReduxTesting/ReduxTesting'
import DisplayCount from '../HooksTesting/DisplayCount'
const Stack = createNativeStackNavigator();


const GridMain = () => {
  return(
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Grid}/>
          <Stack.Screen name="DeepLink" component={DeepLinkStack}/>
          <Stack.Screen name="SagaTesting" component={ReduxSagaTesting}/>
          <Stack.Screen name="ReduxTesting" component={ReduxTesting}/>
          <Stack.Screen name="useEffect" component={DisplayCount}/>

        </Stack.Navigator>
  );
}

export default GridMainStack = () => {
  return (
    <NavigationContainer linking={GridLinking}>
        <GridMain />
    </NavigationContainer>
  )
}
  
