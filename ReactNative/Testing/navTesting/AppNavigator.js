import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

const { Screen, Navigator } = createStackNavigator();

export default function Navigation() {
  const options = {};

  return (
  <NavigationContainer>
     <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen options={options} name="Details" component={DetailsScreen} />
    </Navigator>
  </NavigationContainer>
   
  );
}
