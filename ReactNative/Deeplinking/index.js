/**
 * @format
 */



import {AppRegistry ,Linking} from 'react-native';
import {name as appName} from './app.json';
// import Grid from './Grid/Grid';
import GridMainStack from './Grid/Main';


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
