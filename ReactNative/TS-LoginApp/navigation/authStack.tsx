import React,{FC} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SignUp,Login} from '../screens'
const Stack = createNativeStackNavigator();

const AuthStack:FC = () => {
    return (
        
        <Stack.Navigator>
            <Stack.Screen component={SignUp} name='signup'/>
            <Stack.Screen component={Login} name='login'/>
        </Stack.Navigator>
    )
}

export default AuthStack
