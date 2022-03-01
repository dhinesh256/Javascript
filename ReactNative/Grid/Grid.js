import { View, StyleSheet} from 'react-native'
import React from 'react'
import ButtonComp from './ButtonComp';


function Grid({navigation}) {
  return (
      <View style={styles.container}>
      <ButtonComp name="DeepLink" navigation={navigation}/>
      <ButtonComp name="SagaTesting" navigation={navigation}/>
      <ButtonComp name={"ReduxTesting"} navigation={navigation}/>
      <ButtonComp name={"useEffect"} navigation={navigation}/>
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

export default Grid