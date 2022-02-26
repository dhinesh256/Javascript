import React, { useEffect, useState } from "react"
import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import MapView, { PROVIDER_GOOGLE , Polyline} from "react-native-maps"
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"
import Geolocation from "react-native-geolocation-service" 
//import {decode} from "@mapbox/polyline"; 

// const getDirections = async (startLoc, destinationLoc) => {
//   try {
//     const KEY = "AIzaSyCv8WaeYgIuIAZw4DsFAYGoRLOK-4caLwI"; //put your API key here.

//     let resp = await fetch(
//       `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
//     );
//     let respJson = await resp.json();
//     let points = decode(respJson.routes[0].overview_polyline.points);
//     console.log(points);
//     let coords = points.map((point, index) => {
//       return {
//         latitude: point[0],
//         longitude: point[1]
//       };
//     });
//     return coords;
//   } catch (error) {
//     return error;
//   }
// }


const App = () => {
  const [location, setLocation] = useState(null) 

  //const [coords, setCoords] = useState([]);

  // useEffect(() => {
  //   //fetch the coordinates and then store its value into the coords Hook.
  //   getDirections("52.5200066,13.404954", "50.1109221,8.6821267")
  //     .then(coords => setCoords(coords))
  //     .catch(err => console.log("Something went wrong",err));
  // }, []);

  const handleLocationPermission = async () => {
    let permissionCheck = ""
    // if (Platform.OS === "ios") {
    //   permissionCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

    //   if (permissionCheck === RESULTS.DENIED) {
    //     const permissionRequest = await request(
    //       PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    //     )
    //     permissionRequest === RESULTS.GRANTED
    //       ? console.warn("Location permission granted.")
    //       : console.warn("Location perrmission denied.")
    //   }
    // }

    if (Platform.OS === "android") {
      permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)

      if (permissionCheck === RESULTS.DENIED) {
        const permissionRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        )
        permissionRequest === RESULTS.GRANTED
          ? console.warn("Location permission granted.")
          : console.warn("Location perrmission denied.")
      }
    }
  }

  useEffect(() => {
    handleLocationPermission()
  }, [])

  useEffect(() => {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords
          //console.log(location)
          setLocation({ latitude, longitude })
          
        },
        error => {
          console.log(error.code, error.message)
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      )
    },[location]
    )
   //console.log(location)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {location && ( 
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: location.latitude,  
            longitude: location.longitude,
            // latitude: 52.5200066,
            // longitude: 13.404954,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
      )}

    {/* {coords.length > 0 && <Polyline coordinates={coords} />} */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default App