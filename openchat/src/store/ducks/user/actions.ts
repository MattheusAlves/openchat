import { UserActions } from './types'

export const logonUser = data => {
  return {
    type: UserActions.LOGON_USER,
    payload: data
  }
}

export const logoffUser = data => {
  return {
    type: UserActions.LOGOUT_USER,
    payload: data
  }
}
