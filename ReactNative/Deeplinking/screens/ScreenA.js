import React, { useEffect } from "react";
import { View, TouchableOpacity, Text , Linking } from "react-native";
// import PushNotification from "react-native-push-notification";

export default function ScreenA({ navigation }) {

  // const createChannels = () => {
  //   PushNotification.createChannel({
  //     channelId : 'test-channel',
  //     channelName : 'Test channel '
  //   })
  // }

  // useEffect(()=>{
  //   createChannels()
    
  // },[])

  // const handleNotification =() => {

  //   PushNotification.localNotification({
  //     channelId: 'test-channel',
  //     title: "CLICKED",
  //     message: "Clicked from Screen A",
  //     bigText: "Additional content"
  //   })

  //   PushNotification.localNotificationSchedule({
  //     channelId: "test-channel",
  //     title: 'Scheduled notification',
  //     message: "Clicked from Screen A 10 seconds ago",
  //     date : new Date(Date.now() + 10*1000),
  //     allowWhileIdle: true,
  //   })
  // }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => navigation.navigate("ScreenB", { message: 'Came from Screen A' })}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Go to ScreenB
        </Text>
      </TouchableOpacity>


      {/* <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => handleNotification()}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Push Notification
        </Text>
      </TouchableOpacity> */}
    </View>
  );

};