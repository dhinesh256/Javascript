import * as React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react-native';
import configureStore from '../ReduxTesting/store';
import TodoList from '../ReduxTesting/components/TodoList';
import ClearButton from '../ReduxTesting/components/clearButton'

describe('Application test', () => {
  test('it should execute with a store with 4 elements', () => {
    const initialState = {
      todos: [
        { id: 1, text: 'Sing something', date: new Date() },
        { id: 2, text: 'Dance something', date: new Date() },
        { id: 3, text: 'Sleep something', date: new Date() },
        { id: 4, text: 'Sleep something', date: new Date() },
      ],
    };
    const store = configureStore(initialState);

    const component = (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const { getAllByText } = render(component);
    const todoElems = getAllByText(/something/i);

    expect(todoElems.length).toEqual(4);
  });

  test('should execute with 2 elements and end up with 1 after delete', () => {
    const initialState = {
      todos: [
        { id: 1, text: 'Sing something', date: new Date() },
        { id: 2, text: 'Dance something', date: new Date() },
      ],
    };
    const store = configureStore(initialState);

    const component = (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const { getAllByText , getByText } = render(component);
    const todoElems = getAllByText(/something/i);

    expect(todoElems.length).toBe(2);

    const buttons = getAllByText('Delete');
    expect(buttons.length).toBe(2);

    fireEvent.press(buttons[0]);
    expect(getAllByText('Delete').length).toBe(1);



  });

  test("Testing Clear All" , () => {

    const initialState = {
      todos: [
        { id: 1, text: 'Sing something', date: new Date() },
        { id: 2, text: 'Dance something', date: new Date() },
      ],
    };
    const store = configureStore(initialState);

    const component = (
      <Provider store={store}>
        <ClearButton />
      </Provider>
    );

    const component2 = (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const { getAllByText ,queryAllByText } = render(component2);

    const {getByText} = render(component)

    const todoElems = getAllByText(/something/i);

    expect(todoElems.length).toBe(2);

    fireEvent.press(getByText('Clear All'))

    const todoElems2 = queryAllByText(/something/i);

    expect(todoElems2.length).toBe(0);






    


  })
});
