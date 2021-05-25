import { createStore, Store } from 'redux'
import rootReducer from './ducks/rootReducer'
import { InterestState } from './ducks/interest/types'
import { UserState } from './ducks/user/types'

export interface ApplicationState {
  interestState: InterestState
  userState: UserState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
