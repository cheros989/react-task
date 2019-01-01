import { combineReducers } from 'redux';
import { SET_AUTHENTICATED, PRELOAD_ENABLE, PRELOAD_DISABLE } from './actions';

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

const app = combineReducers({
  login,
  preload
})

export default app