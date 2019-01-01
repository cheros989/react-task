import { combineReducers } from 'redux';
import { SET_AUTHENTICATED } from './actions';

const initialState = {
  isAuthenticated: false
}

function login(state = initialState, action) {
  
  if (action.type === SET_AUTHENTICATED)
    state.isAuthenticated = action.isAuthenticated

  return state
}

const app = combineReducers({
  login
})

export default app