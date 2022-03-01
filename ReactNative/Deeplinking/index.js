/**
 * @format
 */


//import App from './App';
// import ToDo from './ToDo/ToDo';
// import AppNavigator from './navTesting/AppNavigator'
// import DrawerNavigator from './navTesting/DrawerNavigator'
// import ReduxTesting from './ReduxTesting/ReduxTesting'
import {AppRegistry ,Linking} from 'react-native';
import {name as appName} from './app.json';
// import Grid from './Grid/Grid';
import GridMainStack from './Grid/Main';
// import MainScreen from './HooksTesting/ChangNameContext/MainScreen'
// import ReduxSagaTesting from './ReduxSagaTesting/ReduxSagaTesting'
// import App from './Deeplinking/App'
// import GridMain from './Grid/Main'
// import DeeplinkNotification from './Deeplinking/DeeplinkNotification'

import PushNotification from "react-native-push-notification";


PushNotification.configure({
    onNotification: function (notification) {
        console.log("NOTIFICATIONS:  ", notification);
        const url = notification.message
        
        Linking.openURL(url)

    },

    requestPermissions: Platform.OS === 'ios'
});


AppRegistry.registerComponent(appName, () => GridMainStack );
