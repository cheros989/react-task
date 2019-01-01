export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'

export function authenticate(currentUser) {
  return {
    type: SET_AUTHENTICATED,
    currentUser: currentUser
  }
}