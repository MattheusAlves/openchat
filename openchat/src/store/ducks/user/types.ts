export enum UserActions {
  LOGON_USER = '@user/LOGON_USER',
  LOGOUT_USER = '@user/LOGOUT_USER'
}

export interface User {
  name: string
}

export interface UserState {
  readonly user: User
  readonly error: boolean
  readonly loading: boolean
}
