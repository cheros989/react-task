import { combineReducers } from 'redux';
import { SET_AUTHENTICATED } from './actions';

const initialState = {
  isAuthenticated: false
}

function login(state = initialState, action) {
  
  console.log(action.type)
  if (action.type === SET_AUTHENTICATED) {
    return Object.assign({}, state, {
      isAuthenticated: action.isAuthenticated
    })
  }

  return state
}

const app = combineReducers({
  login
})

export default app