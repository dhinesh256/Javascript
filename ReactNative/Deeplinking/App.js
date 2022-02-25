import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";
import ScreenC from "./screens/ScreenC";
import LinkingScreen from "./screens/LinkingScreen";
import PushNotificationScreen from "./screens/PushNotificationScreen";
import linking from "./linking";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PNScreen" component={PushNotificationScreen}/>
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
      <Stack.Screen name="LinkingScreen" component={LinkingScreen} />
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer
      linking={linking}
    >
      <MyStack />
    </NavigationContainer>
  );
}