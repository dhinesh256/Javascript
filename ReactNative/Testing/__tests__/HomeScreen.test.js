import * as React from 'react';
import { runSaga } from 'redux-saga';
import { getUsers } from '../ReduxSagaTesting/sagas/userSagas';
import { render } from '@testing-library/react-native'
import * as api from '../ReduxSagaTesting/api/contactApi'; // we'll mock the getAllUsers api
import { fetchContactDataSuccess , fetchContactData } from '../ReduxSagaTesting/actions/contactActions';
import HomeScreen from '../ReduxSagaTesting/screens/HomeScreen'
import { Provider } from 'react-redux';
import store from '../ReduxSagaTesting/store'

// test('selector should return the desired page', () => {
//     const nextPage = 1;
//     const state = { nextPage };
//     const res = getPage(state);
//     expect(res).toBe(nextPage);
// });

test('should load and handle images in case of success', async () => {
    // we push all dispatched actions to make assertions easier
    // and our tests less brittle
    const dispatchedActions = [];

    const component = render(
    <Provider store={store}>
        <HomeScreen/>
    </Provider>)
    
   
    const mockedUsers = [{id:1,name:'abd'},{id:2,name:'def'}];
    api.getAllUsers = jest.fn(() => Promise.resolve(mockedUsers));

    const fakeStore = {
        getState: () => ({user: mockedUsers }),
        dispatch: action => dispatchedActions.push(action),
    };

    // wait for saga to complete
    await runSaga(fakeStore, getUsers).done;


    console.log(dispatchedActions)
    expect(api.getAllUsers.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(fetchContactDataSuccess(mockedUsers));
    expect(getUsers.call.length).toBe(1)
    

    expect(component.getByTestId('test-flist')).toBeTruthy()
    // expect(component.getAllByTestId('num').length).toBe(10)
});

