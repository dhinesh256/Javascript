import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';

import rootReducer from './reducers/index';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,

        applyMiddleware(sagaMiddleware),
                 
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;