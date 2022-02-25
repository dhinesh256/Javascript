import {put, takeEvery, call} from 'redux-saga/effects'
import { types } from '../actions/actionTypes'
import { getAllUsers } from '../api/contactApi'

export function* getUsers(){
    const user = yield call(getAllUsers)
    yield put({type: types.SEND_REQUEST_GET_ALL_USER_SUCCESS, payload: user})
}

export default function* contactSaga(){
    yield takeEvery(types.SEND_REQUEST_GET_ALL_USER, getUsers)
}
