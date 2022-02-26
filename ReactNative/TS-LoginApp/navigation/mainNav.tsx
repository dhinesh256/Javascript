import React , {FC , useState , useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from 'firebase/compat/app'
import '../constants/firebase'
//import 'firebase/compat/auth'
import AppStack from "./appStack";
import AuthStack from "./authStack";
import { Text, View,TouchableHighlight } from "react-native";
import { Home } from "../screens";

const MainNav : FC = () => {
    // const [user, setuser] = useState<any>(null)

    // const bootstrap = () => {
    //     firebase.auth().onAuthStateChanged( (_user: any) => {
    //         if(_user){
    //             setuser(_user)
    //         }
    //     })
    // }

    // useEffect(() => {
    //     bootstrap()
    // }, [])
    
    return (

        <NavigationContainer>
            {/* { user !== null ? <AppStack/> : <AuthStack/> } */}
            <AppStack/>
        </NavigationContainer>
    )
}

export default MainNav 


