import * as React from 'react';
import { StyleSheet, View, StatusBar, Button } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ClearButton from './components/clearButton';

const store = configureStore();

export default function ReduxTesting() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ClearButton/>
        <AddTodo />
        <TodoList />
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


