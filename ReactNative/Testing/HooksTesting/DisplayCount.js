import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function DisplayCount({onCountChange = () => {}}) {

    const [count,setCount] = React.useState(0)


    React.useEffect(()=>{
      onCountChange()
    },[count])

  return (
    <View style={styles.container}>
        <Text testID='count'>{`count ${count}`}</Text>

        <Button onPress={() => setCount(count+1)} testID="Increment" title='+' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
