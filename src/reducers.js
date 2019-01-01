import { combineReducers } from 'redux';
import { SET_AUTHENTICATED } from './actions';

const initialState = {
  currentUser: null
}

function login(state = initialState, action) {
  
  console.log(action.type)
  if (action.type === SET_AUTHENTICATED) {
    return Object.assign({}, state, {
      currentUser: action.currentUser
    })
  }

  return state
}

const app = combineReducers({
  login
})

export default app