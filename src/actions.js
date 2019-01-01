export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
export const PRELOAD_ENABLE = 'PRELOAD_ENABLE'
export const PRELOAD_DISABLE = 'PRELOAD_DISABLE'

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