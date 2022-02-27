import { View, StyleSheet} from 'react-native'
import React from 'react'
import ButtonComp from './ButtonComp';


export default function Grid({navigation}) {
  return (

      <View style={styles.container}>
      <ButtonComp name="DeepLink" navigation={navigation}/>
      {/* <ButtonComp name="SagaTesting" navigation={navigation}/> */}
      </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white',
  }
});