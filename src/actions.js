export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
export const PRELOAD_ENABLE = 'PRELOAD_ENABLE'
export const PRELOAD_DISABLE = 'PRELOAD_DISABLE'
export const SET_USER_DATA = 'SET_USER_DATA'
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA'

export function authenticate(currentUser) {
  return {
    type: SET_AUTHENTICATED,
    currentUser: currentUser
  }
}

export function startPreload() {
  return {
    type: PRELOAD_ENABLE
  }
}

export function stopPreload() {
  return {
    type: PRELOAD_DISABLE
  }
}

export function setUserData(userData) {
  return {
    type: SET_USER_DATA,
    data: {
      userData: userData
    }
  }
}