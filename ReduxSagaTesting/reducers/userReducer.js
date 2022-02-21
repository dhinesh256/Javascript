import { actions } from '../actions/userAction.js';
const initialState = {
    isLoading : true,
    users,
    error,
}
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOAD_USER:
      return {...state , isLoading:true};

    case actions.SET_USER:
      return {...state , users: action.users};

    case actions.SET_ERROR:
      return {...state , error: action.error};

    default:
      return state;
  }
}
