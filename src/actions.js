export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'

export function authenticate(isAuthenticated) {
  return {
    type: SET_AUTHENTICATED,
    isAuthenticated: isAuthenticated
  }
}