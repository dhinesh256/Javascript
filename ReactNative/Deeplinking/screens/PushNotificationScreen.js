import { View, Text , StyleSheet , TouchableOpacity, FlatList } from 'react-native'
import React , {useEffect} from 'react'
import PushNotification from "react-native-push-notification";


export default function PushNotificationScreen({navigation}) {


  useEffect(() => {
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel(
        {
            channelId: "test-channel",
            channelName: "Test Channel"
        }
    )
  }


  const handleNotification = (item, index) => {

    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
        channelId: "test-channel",
        title: " Notification Title ",
        message: item,
        // bigText: item ,
        color: "red",
        id: index
    });

    // PushNotification.localNotificationSchedule({
    //     channelId: "test-channel",
    //     title: "Alarm",
    //     message: "You clicked on " + item + " 5 seconds ago",
    //     date: new Date(Date.now() + 5 * 1000),
    //     allowWhileIdle: true,
    // });
}


const values = [
   {
    screen : "ScreenA",
    url : "myapp://app/a"
  },
  {
    screen : "ScreenB",
    url : "myapp://app/b/Message received from notification"
  },
  {
    screen : "ScreenC",
    url : "myapp://app/c"
  },
  {
    screen : "Browser",
    url : "https://reactnative.dev/"
  }
]
  return (
    <View style={styles.body}>
      <TouchableOpacity
                  style={styles.item}
                onPress={() => navigation.navigate("ScreenA")}
              >
                <Text style={styles.title}> Go to ScreenA </Text>
              </TouchableOpacity>
      <FlatList
          data={values}
          renderItem={({ item, index }) => (
              <TouchableOpacity 
                  style={styles.item}
                  onPress={() => { handleNotification(item.url, index) }}
              >
                  <Text style={styles.title}>{`Push Notification->${item.screen}`}</Text>  
              </TouchableOpacity>   
           )}
          
          keyExtractor={(item, index) => index.toString()}
      /> 
              
      
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    backgroundColor: "#007aff",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
    margin:5
  },
  title:{
    fontSize: 25,
    fontWeight: '400',
    color: "#fff",
  }
})
