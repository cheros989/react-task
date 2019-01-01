import { combineReducers } from 'redux';
import { 
    SET_AUTHENTICATED,
    PRELOAD_ENABLE,
    PRELOAD_DISABLE,
    SET_USER_DATA,
    CLEAR_USER_DATA 
  } from './actions';

function login(state = {currentUser: null}, action) {
  if (action.type === SET_AUTHENTICATED) {
    return Object.assign({}, state, {
      currentUser: action.currentUser
    })
  }

  return state
}

function preload(state = {isLoading: false}, action) {
  switch (action.type) {
    case PRELOAD_ENABLE:
      return Object.assign({}, state, {
        isLoading: true
      })
    case PRELOAD_DISABLE:
      return Object.assign({}, state, {
        isLoading: false
      })
    default:
      return state
  }
}

const userState = {
  userData: {
    'city': '',
    'languages': [],
    'social': []
  }
}

function user(state = userState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return Object.assign({}, state, action.data)
    case CLEAR_USER_DATA:
      return {}
    default:
      return state
  }
}

const app = combineReducers({
  login,
  preload, 
  user
})

export default app