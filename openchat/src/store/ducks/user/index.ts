import { Reducer } from 'redux'
import { UserState, UserActions } from './types'
const INITIAL_STATE: UserState = {
  user: {
    name: ''
  },
  error: false,
  loading: false
}
const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActions.LOGON_USER: {
      return {
        ...state,
        loading: false,
        error: false,
        user: {
          name: action.payload
        }
      }
    }
    case UserActions.LOGOUT_USER: {
      return {
        ...state,
        loading: false,
        error: false
      }
    }
    default:
      return state
  }
}

export default reducer
