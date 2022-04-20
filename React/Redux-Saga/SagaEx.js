/*
In REDUX , 
    1.action,action creator and reducer is created in reducer.js
    2.action creator(from reducer) is used in the UI component
    3.reducer is used with store
    4.when the action creator is dispatched , reducer gets called 
    and changes the state of store
In REDUX-SAGA ,
    1.action gets dispatched
    2.watcher saga listens to action
    3.Handler calls a function to make a req
*/

import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
//import { setVal } from './reducer'
import {put,takeEvery} from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
    yield delay(3000)

    yield put({type:'SET_VAL_ASYNC',val:0})  //instructs the middleware to dispatch an SET_VAL action.
  }

// Our watcher Saga: spawn a new incrementAsync task on each SET_VALUE
export function* watchIncrementAsync() {
    
    yield takeEvery('SET_VAL', incrementAsync) //to listen for dispatched SET_VALUE action and run 
    //incrementAsync each time.
}

const SagaEx = () => {
    var val = useSelector(state=>state.firstReducer.val)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={
                ()=>{
                    dispatch({type:'SET_VAL',val})
                }}>
                    increment: {val}
                </button>
        </div>
    )
}

export default SagaEx
