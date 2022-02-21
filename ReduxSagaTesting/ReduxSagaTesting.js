import * as React from 'react';
import { StyleSheet, View, StatusBar, Button } from 'react-native';
import { Provider } from 'react-redux';
import { User } from './components/user';
import configureStore from './store';

const store = configureStore();

export default function ReduxSagaTesting() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <User/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
});


