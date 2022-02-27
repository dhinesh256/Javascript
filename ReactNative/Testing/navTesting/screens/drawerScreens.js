import * as React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';


export function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome!</Text>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
export function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the notifications screen</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }