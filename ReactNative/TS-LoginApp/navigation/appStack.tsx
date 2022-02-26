import React,{FC} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home,Dashboard} from '../screens'
const Stack = createNativeStackNavigator();

const AppStack:FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Home} name='home'/>
            <Stack.Screen component={Dashboard} name='dashboard'/>
        </Stack.Navigator>
    )
}

export default AppStack