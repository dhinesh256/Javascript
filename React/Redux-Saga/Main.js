import React from "react";
import { Provider } from "react-redux";
import firstReducer from "./reducer";
import {combineReducers, createStore , applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import SagaEx from "./SagaEx";
import { watchIncrementAsync } from "./SagaEx"; 

const saga = createSagaMiddleware()
const rootReducer = combineReducers({firstReducer})
const store = createStore(rootReducer,applyMiddleware(saga))
saga.run(watchIncrementAsync)

function  Main() {
    return(
        <Provider store={store}>
            <SagaEx/>
        </Provider>
    )
}
export default Main