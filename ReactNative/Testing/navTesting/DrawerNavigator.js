import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen,NotificationsScreen} from './screens/drawerScreens'
const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
  <NavigationContainer>
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Notifications" component={NotificationsScreen} />
    </Navigator>
  </NavigationContainer>    
    
  );
}