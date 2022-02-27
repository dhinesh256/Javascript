import { createStore } from 'redux';
import reducers from './reducers';
import { applyMiddleware } from 'redux';
const initialStore = {
  todos: [],
};

export default function configureStore(initialState = initialStore) {
  return createStore(reducers, initialState);
}
 