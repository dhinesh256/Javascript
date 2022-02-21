import { put, call, takeEvery } from 'redux-saga/effects';

import { setUser , setError } from '../actions/userAction';
import { actions } from '../actions/userAction';
import { fetchImages } from '../api';


export function* handleUsersLoad() {
    try {
        const users = yield call(fetchImages);
        yield put(setUser(users));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* rootSaga() {
    yield takeEvery(actions.LOAD_USER, handleUsersLoad);
}